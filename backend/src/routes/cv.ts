import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { asyncHandler } from '../middleware/errorHandler';

const router = Router();

// GET /api/download-cv - Download CV file
router.get('/download-cv', asyncHandler(async (req: Request, res: Response) => {
  const cvFileName = 'CV_Abdsamad.pdf';
  const cvPath = path.join(__dirname, '../../frontend/public', cvFileName);

  // Check if CV file exists
  if (!fs.existsSync(cvPath)) {
    return res.status(404).json({
      success: false,
      error: 'CV file not found'
    });
  }

  try {
    // Set appropriate headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${cvFileName}"`);
    res.setHeader('Content-Length', fs.statSync(cvPath).size);
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour

    // Stream the file
    const fileStream = fs.createReadStream(cvPath);
    fileStream.pipe(res);

    // Handle stream errors
    fileStream.on('error', (error) => {
      console.error('Error streaming CV file:', error);
      if (!res.headersSent) {
        res.status(500).json({
          success: false,
          error: 'Error downloading CV'
        });
      }
    });

  } catch (error) {
    console.error('CV download error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error while downloading CV'
    });
  }
}));

// GET /api/cv-info - Get CV information (metadata)
router.get('/cv-info', asyncHandler(async (req: Request, res: Response) => {
  const cvFileName = 'CV_Abdsamad.pdf';
  const cvPath = path.join(__dirname, '../../frontend/public', cvFileName);

  if (!fs.existsSync(cvPath)) {
    return res.status(404).json({
      success: false,
      error: 'CV file not found'
    });
  }

  try {
    const stats = fs.statSync(cvPath);

    res.json({
      success: true,
      data: {
        fileName: cvFileName,
        fileSize: stats.size,
        fileSizeFormatted: `${(stats.size / 1024).toFixed(2)} KB`,
        lastModified: stats.mtime,
        downloadUrl: '/api/download-cv'
      }
    });
  } catch (error) {
    console.error('CV info error:', error);
    res.status(500).json({
      success: false,
      error: 'Error retrieving CV information'
    });
  }
}));

export default router;
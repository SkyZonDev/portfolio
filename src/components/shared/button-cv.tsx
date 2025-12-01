'use client';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export function ButtonCV() {
    const handleDownloadCV = () => {
        const cvUrl = '/cv.pdf';
        const a = document.createElement('a');
        a.href = cvUrl;
        a.download = 'cv.pdf';
        a.click();
    };
    return (
        <Button variant="outline" size="lg" asChild onClick={handleDownloadCV}>
            <Link href="/cv.pdf">
                <Download className="size-4" />
                Télécharger mon CV
            </Link>
        </Button>
    );
}

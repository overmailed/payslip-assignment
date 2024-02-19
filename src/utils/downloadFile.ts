import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { FileOpener } from '@capacitor-community/file-opener';

function openFileNative(url: string, filename: string, mime: string): void {
  Filesystem.downloadFile({
    path: filename,
    url: url,
    directory: Directory.Documents,
  }).then((res) => {
    if (res.path) {
      FileOpener.open({ filePath: res.path, contentType: mime });
    }
  });
}

async function downloadFileWeb(url: string, filename: string): Promise<void> {
  const response = await fetch(url);
  const blob = await response.blob();

  const a = document.createElement('a');
  a.style.setProperty('display', 'none');
  a.download = filename;
  a.href = URL.createObjectURL(blob);
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function downloadFile(url: string, filename: string, mime: string): void {
  if (Capacitor.isNativePlatform()) {
    openFileNative(url, filename, mime);
  } else {
    downloadFileWeb(url, filename);
  }
}

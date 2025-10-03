# PowerShell script to get image dimensions
# Run this from the project root directory

Write-Host "`n=== Prompt Theory - Image Dimensions ===" -ForegroundColor Cyan
Write-Host "Getting dimensions for screenshot images...`n" -ForegroundColor Yellow

Add-Type -AssemblyName System.Drawing

$screenshots = Get-ChildItem "public\images\screenshot-*.png" -ErrorAction SilentlyContinue

if ($screenshots.Count -eq 0) {
    Write-Host "ERROR: No screenshot images found in public\images\" -ForegroundColor Red
    Write-Host "Make sure you're running this from the project root directory.`n" -ForegroundColor Yellow
    exit 1
}

foreach ($file in $screenshots) {
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        Write-Host "$($file.Name):" -ForegroundColor Green -NoNewline
        Write-Host " $($img.Width) x $($img.Height)" -ForegroundColor White
        $img.Dispose()
    }
    catch {
        Write-Host "$($file.Name): ERROR - Could not read image" -ForegroundColor Red
    }
}

Write-Host "`n=== All Images (including icons) ===" -ForegroundColor Cyan

$allImages = Get-ChildItem "public\images\*.png" -ErrorAction SilentlyContinue

foreach ($file in $allImages) {
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        Write-Host "$($file.Name):" -ForegroundColor Green -NoNewline
        Write-Host " $($img.Width) x $($img.Height)" -ForegroundColor White
        $img.Dispose()
    }
    catch {
        Write-Host "$($file.Name): ERROR - Could not read image" -ForegroundColor Red
    }
}

Write-Host "`nDone! Update these dimensions in src/App.jsx`n" -ForegroundColor Cyan

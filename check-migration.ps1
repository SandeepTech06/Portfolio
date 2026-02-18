# Next.js Migration - Final Steps Checklist

Write-Host "`n================================" -ForegroundColor Cyan
Write-Host "Next.js Migration - Final Steps" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

Write-Host "📋 CHECKLIST - Follow these steps to complete the migration:`n" -ForegroundColor Yellow

# Check if package.json.next exists
$packageNextExists = Test-Path "package.json.next"
Write-Host "Step 1: Update Dependencies" -ForegroundColor Green
if ($packageNextExists) {
    Write-Host "  ✓ package.json.next is ready" -ForegroundColor Green
    Write-Host "  → Run these commands:" -ForegroundColor White
    Write-Host "    Copy-Item package.json package.json.backup" -ForegroundColor Cyan
    Write-Host "    Copy-Item package.json.next package.json -Force" -ForegroundColor Cyan
    Write-Host "    Remove-Item -Recurse -Force node_modules, package-lock.json" -ForegroundColor Cyan
    Write-Host "    npm install`n" -ForegroundColor Cyan
} else {
    Write-Host "  ✗ package.json.next not found!" -ForegroundColor Red
}

# Check UI components
$srcUiPath = "src/components/ui"
$targetUiPath = "components/ui"

Write-Host "Step 2: Convert Remaining UI Components" -ForegroundColor Green

if (Test-Path $srcUiPath) {
    $srcFiles = Get-ChildItem "$srcUiPath/*.tsx"
    $targetFiles = Get-ChildItem "$targetUiPath/*.jsx" -ErrorAction SilentlyContinue
    
    $converted = if ($targetFiles) { $targetFiles.Count } else { 0 }
    $total = $srcFiles.Count
    $remaining = $total - $converted
    
    Write-Host "  Status: $converted of $total files converted" -ForegroundColor $(if ($remaining -eq 0) { "Green" } else { "Yellow" })
    
    if ($remaining -gt 0) {
        Write-Host "  ⚠ $remaining files still need conversion:" -ForegroundColor Yellow
        
        # Get list of converted files
        $convertedNames = @()
        if ($targetFiles) {
            $convertedNames = $targetFiles | ForEach-Object { $_.BaseName }
        }
        
        # Show unconverted files
        $unconverted = $srcFiles | Where-Object { 
            $baseName = $_.BaseName
            $baseName -notin $convertedNames
        } | Select-Object -First 10
        
        foreach ($file in $unconverted) {
            Write-Host "    - $($file.Name)" -ForegroundColor White
        }
        
        if ($remaining -gt 10) {
            Write-Host "    ... and $($remaining - 10) more files" -ForegroundColor Gray
        }
        
        Write-Host "`n  → You can convert them manually or use the PowerShell script:" -ForegroundColor White
        Write-Host "    See migrate.ps1 for automation (requires script execution)" -ForegroundColor Cyan
    } else {
        Write-Host "  ✓ All UI components converted!" -ForegroundColor Green
    }
} else {
    Write-Host "  ✗ Source UI components not found at $srcUiPath" -ForegroundColor Red
}

Write-Host "`nStep 3: Start Development Server" -ForegroundColor Green
Write-Host "  → After installing dependencies, run:" -ForegroundColor White
Write-Host "    npm run dev`n" -ForegroundColor Cyan

Write-Host "Step 4: Test Application" -ForegroundColor Green
Write-Host "  Test the following:" -ForegroundColor White
Write-Host "    ☐ Homepage loads" -ForegroundColor Gray
Write-Host "    ☐ Navigation works" -ForegroundColor Gray
Write-Host "    ☐ Theme toggle (light/dark)" -ForegroundColor Gray
Write-Host "    ☐ All sections display" -ForegroundColor Gray
Write-Host "    ☐ Mobile responsive" -ForegroundColor Gray
Write-Host "    ☐ Smooth scrolling`n" -ForegroundColor Gray

Write-Host "Step 5: Clean Up Old Files (After Testing)" -ForegroundColor Green
Write-Host "  → Remove old Vite/React files:" -ForegroundColor White
Write-Host "    Remove-Item vite.config.ts, tsconfig*.json, index.html" -ForegroundColor Cyan
Write-Host "    Remove-Item eslint.config.js, tailwind.config.ts`n" -ForegroundColor Cyan

Write-Host "================================" -ForegroundColor Cyan
Write-Host "📚 Documentation Available:" -ForegroundColor Yellow
Write-Host "  - QUICKSTART.md        - Quick migration steps" -ForegroundColor White
Write-Host "  - MIGRATION-GUIDE.md   - Detailed guide" -ForegroundColor White
Write-Host "  - MIGRATION-SUMMARY.md - What's been done`n" -ForegroundColor White

Write-Host "🎉 Almost there! Follow the steps above to complete the migration." -ForegroundColor Green
Write-Host "================================`n" -ForegroundColor Cyan

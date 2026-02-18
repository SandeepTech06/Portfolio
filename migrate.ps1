# Next.js Migration Script
# This script helps migrate UI components from TypeScript to JavaScript

Write-Host "Starting Next.js Migration..." -ForegroundColor Green

# Step 1: Create components/ui directory
Write-Host "`nStep 1: Creating components/ui directory..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "components/ui" | Out-Null

# Step 2: Process UI components
Write-Host "Step 2: Converting UI components from TypeScript to JavaScript..." -ForegroundColor Yellow

$uiFiles = Get-ChildItem "src/components/ui/*.tsx" -ErrorAction SilentlyContinue

if ($uiFiles) {
    $converted = 0
    foreach ($file in $uiFiles) {
        $newName = $file.Name -replace '\.tsx$', '.jsx'
        $targetPath = "components/ui/$newName"
        
        Write-Host "  Converting $($file.Name) -> $newName" -ForegroundColor Cyan
        
        $content = Get-Content $file.FullName -Raw
        
        # Check if component needs 'use client'
        $needsClientDirective = $content -match "use(State|Effect|Context|Ref|Callback|Memo|Reducer|Id|LayoutEffect|ImperativeHandle|DebugValue|Transition|DeferredValue|SyncExternalStore|InsertionEffect)" `
                              -or $content -match "onClick|onChange|onSubmit|onFocus|onBlur|onKeyDown|onKeyUp|onMouseEnter|onMouseLeave" `
                              -or $content -match "window\.|document\.|localStorage|sessionStorage|navigator\."
        
        # Add 'use client' if needed
        if ($needsClientDirective -and $content -notmatch "^'use client'") {
            $content = "'use client'`n`n" + $content
        }
        
        # Remove simple TypeScript patterns
        # This is a basic conversion - some manual fixes may be needed
        
        # Remove type imports
        $content = $content -replace "import type \{[^}]+\} from [^;]+;", ""
        
        # Remove type annotations in function parameters (simple cases)
        $content = $content -replace "\(\s*\{([^}]+)\}\s*:\s*[^)]+\)", "({ `$1 })"
        
        # Remove interface definitions (basic pattern)
        $content = $content -replace "(?m)^interface \w+\s*\{[^}]*\}\s*$", ""
        
        # Remove React.FC and similar
        $content = $content -replace ":\s*React\.\w+(<[^>]+>)?", ""
        
        # Remove generic type parameters from components
        $content = $content -replace "React\.forwardRef<[^>]+,\s*([^>]+)>", "React.forwardRef"
        
        # Remove : HTMLAttributes and similar
        $content = $content -replace ":\s*(HTML|SVG)\w+<[^>]+>", ""
        
        # Clean up empty lines
        $content = $content -replace "(?m)^\s*$\n\s*$", "`n"
        
        Set-Content -Path $targetPath -Value $content
        $converted++
    }
    Write-Host "  Converted $converted files" -ForegroundColor Green
} else {
    Write-Host "  No UI components found in src/components/ui/" -ForegroundColor Red
}

# Step 3: Copy hooks
Write-Host "`nStep 3: Copying hooks..." -ForegroundColor Yellow
$hookFiles = Get-ChildItem "src/hooks/*.ts" -ErrorAction SilentlyContinue

if ($hookFiles) {
    New-Item -ItemType Directory -Force -Path "hooks" | Out-Null
    foreach ($file in $hookFiles) {
        $newName = $file.Name -replace '\.ts$', '.js'
        $content = Get-Content $file.FullName -Raw
        
        # Add 'use client' for hooks
        if ($content -notmatch "^'use client'") {
            $content = "'use client'`n`n" + $content
        }
        
        Set-Content -Path "hooks/$newName" -Value $content
        Write-Host "  Copied $($file.Name) -> $newName" -ForegroundColor Cyan
    }
}

# Step 4: Summary
Write-Host "`n========================================" -ForegroundColor Green
Write-Host "Migration Steps Completed!" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Green

Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Review and manually fix any TypeScript remnants in components/ui/*.jsx" -ForegroundColor White
Write-Host "2. Backup your current package.json: Copy-Item package.json package.json.backup" -ForegroundColor White
Write-Host "3. Replace package.json: Copy-Item package.json.next package.json -Force" -ForegroundColor White
Write-Host "4. Remove old dependencies: Remove-Item -Recurse -Force node_modules, package-lock.json" -ForegroundColor White
Write-Host "5. Install new dependencies: npm install" -ForegroundColor White
Write-Host "6. Start dev server: npm run dev" -ForegroundColor White
Write-Host "7. Test your application thoroughly" -ForegroundColor White
Write-Host "8. See MIGRATION-GUIDE.md for detailed instructions`n" -ForegroundColor White

Write-Host "Manual Review Required:" -ForegroundColor Red
Write-Host "- Check all files in components/ui/ for TypeScript syntax" -ForegroundColor White
Write-Host "- Fix any type-related errors" -ForegroundColor White
Write-Host "- Ensure 'use client' is added to interactive components" -ForegroundColor White
Write-Host "- Test all functionality after migration`n" -ForegroundColor White

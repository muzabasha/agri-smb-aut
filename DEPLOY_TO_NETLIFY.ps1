#!/usr/bin/env pwsh
# Quick Netlify Deployment Script for Agri-LMS
# Usage: Run this script to deploy to Netlify in one command

Write-Host "🚀 AGRI-LMS - NETLIFY DEPLOYMENT" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
Write-Host ""

# Check if Netlify CLI is installed
Write-Host "Checking Netlify CLI..." -ForegroundColor Yellow
$netlifyInstalled = Get-Command netlify -ErrorAction SilentlyContinue

if (-not $netlifyInstalled) {
    Write-Host "❌ Netlify CLI not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Installing Netlify CLI globally..." -ForegroundColor Yellow
    npm install -g netlify-cli
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install Netlify CLI" -ForegroundColor Red
        Write-Host "Please run manually: npm install -g netlify-cli" -ForegroundColor Yellow
        exit 1
    }
    
    Write-Host "✅ Netlify CLI installed successfully!" -ForegroundColor Green
} else {
    Write-Host "✅ Netlify CLI found!" -ForegroundColor Green
}

Write-Host ""

# Check if user is logged in
Write-Host "Checking Netlify authentication..." -ForegroundColor Yellow
netlify status 2>&1 | Out-Null

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Not logged in to Netlify" -ForegroundColor Yellow
    Write-Host "Opening login page..." -ForegroundColor Yellow
    netlify login
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Login failed or cancelled" -ForegroundColor Red
        exit 1
    }
}

Write-Host "✅ Authenticated!" -ForegroundColor Green
Write-Host ""

# Deploy to production
Write-Host "🚀 Deploying to Netlify..." -ForegroundColor Cyan
Write-Host ""
netlify deploy --prod

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 DEPLOYMENT SUCCESSFUL!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your site is now live!" -ForegroundColor Green
    Write-Host "Check the URL above to access your web application." -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Deployment failed" -ForegroundColor Red
    Write-Host "Check the error messages above." -ForegroundColor Yellow
    Write-Host ""
}

# Pause at the end
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

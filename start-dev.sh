#!/bin/bash
echo "🏥 Starting Dr. del Rosario Website Development Server..."
echo "🔧 Checking dependencies..."

# Kill any existing process on port 3000
lsof -ti:3000 | xargs kill -9 2>/dev/null || echo "Port 3000 is available"

echo "🚀 Starting Vite development server..."
echo "📍 Server will be available at:"
echo "   - Local:   http://localhost:3000/"
echo "   - Network: http://192.168.50.155:3000/"
echo ""
echo "⚡ Features enabled:"
echo "   - Cloudinary media optimization"
echo "   - Hot reload"
echo "   - Professional medical styling"
echo ""
echo "Press Ctrl+C to stop the server"
echo "================================"

npm run dev
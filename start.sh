#!/bin/bash

echo "🚀 Starting HappyMarketDocs Development Environment..."

# Kiểm tra xem Node.js có được cài đặt không
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Kiểm tra xem Hugo có được cài đặt không
if ! command -v hugo &> /dev/null; then
    echo "❌ Hugo is not installed. Please install Hugo first."
    exit 1
fi

# Tạo thư mục logs nếu chưa có
mkdir -p logs

echo "📦 Installing dependencies..."
npm install

echo "🔧 Starting API Server on port 3001..."
node simple-server.js > logs/api-server.log 2>&1 &
API_PID=$!

# Chờ API server khởi động
sleep 2

echo "🌐 Starting Hugo Server on port 1313..."
hugo server -D --bind 0.0.0.0 --baseURL http://localhost:1313 > logs/hugo-server.log 2>&1 &
HUGO_PID=$!

# Chờ Hugo server khởi động
sleep 3

echo ""
echo "✅ Development Environment Started Successfully!"
echo ""
echo "📊 Services:"
echo "   🌐 Hugo Server:    http://localhost:1313"
echo "   🔧 API Server:     http://localhost:3001"
echo "   📋 Admin Panel:    http://localhost:1313/admin/"
echo "   🏥 Health Check:   http://localhost:3001/api/health"
echo ""
echo "📁 Logs:"
echo "   📄 Hugo Logs:      logs/hugo-server.log"
echo "   📄 API Logs:       logs/api-server.log"
echo ""
echo "🛑 To stop all services, press Ctrl+C or run: ./stop.sh"
echo ""

# Function để cleanup khi thoát
cleanup() {
    echo ""
    echo "🛑 Stopping services..."
    kill $API_PID 2>/dev/null
    kill $HUGO_PID 2>/dev/null
    echo "✅ All services stopped."
    exit 0
}

# Trap Ctrl+C
trap cleanup SIGINT SIGTERM

# Chờ user nhấn Ctrl+C
wait
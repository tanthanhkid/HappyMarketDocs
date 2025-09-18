#!/bin/bash

echo "📊 HappyMarketDocs Development Environment Status"
echo "=================================================="

# Kiểm tra Hugo server
HUGO_PIDS=$(pgrep -f "hugo server")
if [ ! -z "$HUGO_PIDS" ]; then
    echo "🌐 Hugo Server:     ✅ Running (PID: $HUGO_PIDS)"
    echo "   URL: http://localhost:1313"
else
    echo "🌐 Hugo Server:     ❌ Not running"
fi

# Kiểm tra API server
API_PIDS=$(pgrep -f "simple-server.js")
if [ ! -z "$API_PIDS" ]; then
    echo "🔧 API Server:      ✅ Running (PID: $API_PIDS)"
    echo "   URL: http://localhost:3001"
else
    echo "🔧 API Server:      ❌ Not running"
fi

# Kiểm tra port status
echo ""
echo "🔌 Port Status:"
PORT_1313=$(lsof -ti:1313 2>/dev/null)
if [ ! -z "$PORT_1313" ]; then
    echo "   Port 1313:       ✅ In use (PID: $PORT_1313)"
else
    echo "   Port 1313:       ❌ Free"
fi

PORT_3001=$(lsof -ti:3001 2>/dev/null)
if [ ! -z "$PORT_3001" ]; then
    echo "   Port 3001:       ✅ In use (PID: $PORT_3001)"
else
    echo "   Port 3001:       ❌ Free"
fi

# Kiểm tra health endpoints
echo ""
echo "🏥 Health Checks:"
if curl -s http://localhost:1313 >/dev/null 2>&1; then
    echo "   Hugo Server:     ✅ Responding"
else
    echo "   Hugo Server:     ❌ Not responding"
fi

if curl -s http://localhost:3001/api/health >/dev/null 2>&1; then
    echo "   API Server:      ✅ Responding"
else
    echo "   API Server:      ❌ Not responding"
fi

# Hiển thị logs nếu có
echo ""
echo "📁 Log Files:"
if [ -f "logs/hugo-server.log" ]; then
    echo "   Hugo Logs:       ✅ Available (logs/hugo-server.log)"
    echo "   Last 3 lines:"
    tail -3 logs/hugo-server.log | sed 's/^/     /'
else
    echo "   Hugo Logs:       ❌ Not available"
fi

if [ -f "logs/api-server.log" ]; then
    echo "   API Logs:        ✅ Available (logs/api-server.log)"
    echo "   Last 3 lines:"
    tail -3 logs/api-server.log | sed 's/^/     /'
else
    echo "   API Logs:        ❌ Not available"
fi

echo ""
echo "🚀 Quick Actions:"
echo "   Start:           ./start.sh"
echo "   Stop:            ./stop.sh"
echo "   Admin Panel:     http://localhost:1313/admin/"
echo "   Health Check:    http://localhost:3001/api/health"

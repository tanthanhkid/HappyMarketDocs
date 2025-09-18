#!/bin/bash

echo "🛑 Stopping HappyMarketDocs Development Environment..."

# Tìm và kill Hugo server processes
HUGO_PIDS=$(pgrep -f "hugo server")
if [ ! -z "$HUGO_PIDS" ]; then
    echo "🌐 Stopping Hugo Server..."
    kill $HUGO_PIDS 2>/dev/null
    sleep 1
    # Force kill nếu cần
    kill -9 $HUGO_PIDS 2>/dev/null
fi

# Tìm và kill API server processes
API_PIDS=$(pgrep -f "simple-server.js")
if [ ! -z "$API_PIDS" ]; then
    echo "🔧 Stopping API Server..."
    kill $API_PIDS 2>/dev/null
    sleep 1
    # Force kill nếu cần
    kill -9 $API_PIDS 2>/dev/null
fi

# Tìm và kill Node.js processes trên port 3001
NODE_PIDS=$(lsof -ti:3001 2>/dev/null)
if [ ! -z "$NODE_PIDS" ]; then
    echo "🔧 Stopping Node.js processes on port 3001..."
    kill $NODE_PIDS 2>/dev/null
    sleep 1
    kill -9 $NODE_PIDS 2>/dev/null
fi

# Tìm và kill Hugo processes trên port 1313
HUGO_PORT_PIDS=$(lsof -ti:1313 2>/dev/null)
if [ ! -z "$HUGO_PORT_PIDS" ]; then
    echo "🌐 Stopping processes on port 1313..."
    kill $HUGO_PORT_PIDS 2>/dev/null
    sleep 1
    kill -9 $HUGO_PORT_PIDS 2>/dev/null
fi

echo "✅ All services stopped successfully!"
echo ""
echo "📊 Port Status:"
echo "   Port 1313: $(lsof -ti:1313 >/dev/null 2>&1 && echo "❌ Still in use" || echo "✅ Free")"
echo "   Port 3001: $(lsof -ti:3001 >/dev/null 2>&1 && echo "❌ Still in use" || echo "✅ Free")"

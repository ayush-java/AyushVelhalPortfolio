#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}   Ayush's AI Portfolio - Startup${NC}"
echo -e "${BLUE}========================================${NC}\n"

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}Error: Python 3 is not installed${NC}"
    echo "Please install Python 3 from https://www.python.org/"
    exit 1
fi

# Check if .env file exists
if [ ! -f "backend/.env" ]; then
    echo -e "${YELLOW}Warning: backend/.env file not found${NC}"
    echo "Creating .env file from .env.example..."
    cp backend/.env.example backend/.env
    echo -e "${YELLOW}Please edit backend/.env and add your OpenAI API key${NC}"
    echo -e "${YELLOW}Get your API key from: https://platform.openai.com/api-keys${NC}\n"
fi

# Check if virtual environment exists
if [ ! -d "backend/venv" ]; then
    echo -e "${BLUE}Creating Python virtual environment...${NC}"
    python3 -m venv backend/venv
    echo -e "${GREEN}✓ Virtual environment created${NC}\n"
fi

# Activate virtual environment and install dependencies
echo -e "${BLUE}Installing Python dependencies...${NC}"
source backend/venv/bin/activate
pip install -q -r backend/requirements.txt
echo -e "${GREEN}✓ Dependencies installed${NC}\n"

# Check if OpenAI API key is set
if ! grep -q "sk-" backend/.env 2>/dev/null; then
    echo -e "${YELLOW}⚠ OpenAI API key not configured in backend/.env${NC}"
    echo -e "${YELLOW}The chatbot will not work until you add your API key${NC}\n"
fi

# Start the backend server
echo -e "${BLUE}Starting backend server...${NC}"
echo -e "${GREEN}Backend running at: http://localhost:5000${NC}"
echo -e "${GREEN}Frontend: Open index.html in your browser${NC}\n"
echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}\n"

cd backend
python server.py

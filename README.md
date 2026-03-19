# Ayush Velhal's AI-Powered Portfolio

A modern, interactive portfolio website featuring an AI chatbot powered by RAG (Retrieval-Augmented Generation) technology using OpenAI's GPT-4o-mini and embeddings.

## 🌟 Features

### Frontend
- ✨ Modern, responsive design with glassmorphism effects
- 🎨 Pure black background with purple accent colors
- 🎭 Smooth animations and transitions
- 📱 Mobile-friendly navigation
- 🎯 Interactive project and certification filtering (including AWS/Azure subfilters)
- 📊 Skills progress bars with rainbow gradients
- 📄 Embedded resume viewer with download functionality
- 🎨 Particle system and cursor trail effects
- 📧 Contact form with social media links

### AI Chatbot (RAG-Powered)
- 🤖 **Advanced RAG Implementation**: Uses OpenAI embeddings for semantic search
- 💬 Professional, respectful responses about Ayush
- 📚 Comprehensive knowledge base covering:
  - Education & Research
  - Projects (AI/ML, Cloud, Cybersecurity, Full Stack)
  - Certifications & Skills
  - Experience (Tech & Cultural)
  - Contact Information
- ⚡ Fast response times with embedding caching
- 🎯 Context-aware answers using vector similarity
- 💰 Cost-optimized with GPT-4o-mini

## 🚀 Quick Start

### Prerequisites
- Python 3.8 or higher
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- Modern web browser

### Setup Instructions

#### 1. Get Your OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Create a new API key
3. Copy the key (starts with `sk-`)

#### 2. Configure the Backend
```bash
# Navigate to backend directory
cd backend

# Copy the example .env file
cp .env.example .env

# Edit .env and add your OpenAI API key
# Replace 'your_openai_api_key_here' with your actual key
nano .env  # or use any text editor
```

#### 3. Run the Application

**Option A: Using the startup script (Recommended)**
```bash
# From the project root directory
./start.sh
```

**Option B: Manual setup**
```bash
# Create virtual environment
python3 -m venv backend/venv

# Activate virtual environment
source backend/venv/bin/activate  # On macOS/Linux
# OR
backend\venv\Scripts\activate  # On Windows

# Install dependencies
pip install -r backend/requirements.txt

# Start the backend server
cd backend
python server.py
```

#### 4. Open the Frontend
- Open `index.html` in your web browser
- The AI chatbot will now be fully functional!

## 📁 Project Structure

```
NewestPersonalPortfolio/
├── index.html              # Main portfolio page
├── style.css               # All styling and animations
├── script.js               # Frontend JavaScript (now with RAG integration)
├── start.sh               # Automated startup script
├── backend/
│   ├── server.py          # Flask backend with RAG implementation
│   ├── requirements.txt   # Python dependencies
│   ├── .env              # API keys (create from .env.example)
│   ├── .env.example      # Example environment file
│   ├── .gitignore        # Git ignore rules
│   └── README.md         # Backend documentation
├── images/
│   ├── Headshot.jpeg     # Profile picture
│   └── TarkAI.jpeg       # Project image
└── AllCerts/             # Certification PDFs
    ├── AIMLCerts/
    └── FoundationalCerts/
```

## 🤖 How the RAG System Works

1. **Knowledge Base**: Contains 11 comprehensive entries about Ayush
2. **User Query**: When a user asks a question
3. **Embedding Generation**: Converts the query to a vector using OpenAI's `text-embedding-3-small`
4. **Similarity Search**: Finds the most relevant knowledge entries using cosine similarity
5. **Context Retrieval**: Retrieves top 3 most relevant entries
6. **Response Generation**: GPT-4o-mini generates a professional response using the retrieved context
7. **Delivery**: Response is formatted and displayed in the chat interface

## 💡 API Endpoints

### POST `/api/chat`
Send a message to the AI chatbot
```json
Request:
{
  "message": "Tell me about Ayush's projects"
}

Response:
{
  "response": "Ayush has worked on several impressive projects..."
}
```

### GET `/api/health`
Check if the backend server is running
```json
Response:
{
  "status": "healthy"
}
```

## 🎨 Customization

### Adding New Knowledge
Edit `backend/server.py` and add entries to the `KNOWLEDGE_BASE` list:
```python
{
    "content": "Your detailed information here...",
    "metadata": {"category": "category_name", "priority": "high"}
}
```

### Changing AI Behavior
Modify the `system_prompt` in `backend/server.py` to adjust the AI's tone and style.

### Styling
All styles are in `style.css`. Key variables:
- `--primary-color`: Purple accent color (#8b5cf6)
- `--background-color`: Pure black (#000000)
- `--text-color`: White (#ffffff)

## 💰 Cost Optimization

The implementation is designed to be cost-effective:
- **Embeddings**: Uses `text-embedding-3-small` ($0.00002 per 1K tokens)
- **Generation**: Uses `gpt-4o-mini` ($0.00015 per 1K input tokens)
- **Caching**: Embeddings are cached to avoid redundant API calls
- **Token Limits**: Responses capped at 500 tokens
- **Estimated Cost**: ~$0.01-0.05 per 100 chat interactions

## 🔒 Security Notes

- Never commit `.env` files to version control
- Keep your OpenAI API key private
- Use environment variables for all sensitive data
- The backend includes CORS for local development
- For production, configure CORS properly and use HTTPS

## 🐛 Troubleshooting

### AI Chatbot Not Working
1. Check if backend server is running (`http://localhost:5000/api/health`)
2. Verify OpenAI API key is set in `backend/.env`
3. Check browser console for errors (F12)
4. Ensure all Python dependencies are installed

### Backend Won't Start
1. Verify Python 3.8+ is installed: `python3 --version`
2. Check if port 5000 is available
3. Ensure virtual environment is activated
4. Check for error messages in terminal

### CORS Errors
- Make sure backend is running on `http://localhost:5000`
- Check that CORS is enabled in `server.py`
- Try using `127.0.0.1` instead of `localhost`

## 📝 License

This is a personal portfolio project. Feel free to use it as inspiration for your own portfolio!

## 📧 Contact

- **Email**: ayush.velhal@gmail.com
- **Phone**: +1 (469) 763-5767
- **Location**: Dallas-Fort Worth, Texas
- **GitHub**: [github.com/ayush-java](https://github.com/ayush-java?tab=repositories)
- **Instagram**: [@ayush.velhal](https://www.instagram.com/ayush.velhal/)

---

Built with ❤️ by Ayush Velhal | Powered by OpenAI RAG Technology

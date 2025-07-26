# 🎮 Hades - Tic Tac Toe

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Play%20Now-brightgreen)](https://hadesisoff.github.io/hades-tic-tac-toe/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> **A modern, AI-powered Tic-Tac-Toe game with personality!** 🤖💬  
> Features adjustable difficulty levels, sound effects, win celebrations, and a trash-talking AI opponent.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 **Smart AI Opponent** | Minimax algorithm with adjustable difficulty levels |
| 🎯 **3 Difficulty Modes** | Easy (50% mistakes) → Medium (25%) → Hard (10%) |
| 🎵 **Sound Effects** | Satisfying audio feedback for moves, wins, and losses |
| 🎉 **Win Celebrations** | Confetti rain and screen flash when you win! |
| 💥 **Lose Effects** | Screen shake and dramatic sounds when AI wins |
| 🔥 **Win Streaks** | Track consecutive wins with fire/robot emojis |
| 💬 **AI Personality** | Random taunts and reactions ("💀 REKT!", "🎯 Not Bad!") |
| 🎨 **Modern Design** | Clean black theme with monospace typography |
| 📱 **Fully Responsive** | Optimized for desktop, tablet, and mobile |
| ⚡ **Fast & Lightweight** | Vanilla JavaScript - no frameworks needed! |

---

## 🕹️ Play Online

**[🎮 Click here to play the game!](https://hadesisoff.github.io/tic-tac-toe/)**

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/HadesIsOff/tic-tac-toe.git
cd tic-tac-toe
```

### 2. Run the Game
Simply open `index.html` in your web browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 3. Or Use a Local Server
```bash
# Python 3
python -m http.server 8000

# Node.js (if you have npx)
npx serve

# Then visit: http://localhost:8000
```

---

## 🎯 How to Play

1. **Choose Your Difficulty**: Start with Easy and work your way up! 
   - 🟢 **Easy**: Perfect for beginners (AI makes 50% mistakes)
   - 🟡 **Medium**: Balanced challenge (AI makes 25% mistakes)  
   - 🔴 **Hard**: For pros only (AI makes 10% mistakes)

2. **Make Your Move**: Click any cell to place your X

3. **Watch the AI**: The AI will respond with personality and trash talk!

4. **Build Streaks**: Win consecutive games to see your fire streak grow 🔥

5. **Enjoy the Show**: Win celebrations, sound effects, and AI reactions!

---

## 🧠 AI Algorithm & Difficulty

The game uses the **Minimax algorithm** for optimal AI play:

```javascript
// Difficulty settings control AI mistake frequency
const mistakeChance = {
    'easy': 0.5,    // 50% chance of random move
    'medium': 0.25, // 25% chance of random move  
    'hard': 0.1     // 10% chance of random move
};
```

### AI Personality Examples:
- **On AI Win**: "💀 REKT!", "🤖 Too Easy!", "⚡ Get Good!"
- **On AI Loss**: "😤 Lucky Shot!", "🎯 Not Bad, Human!", "💪 Well Played!"
- **On Draw**: "😐 Meh...", "🤝 I'll Allow It", "🤔 Interesting..."

---

## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Animations
- **Audio**: Web Audio API for sound effects
- **AI**: Minimax algorithm with alpha-beta pruning
- **Typography**: Monaco/Menlo monospace fonts
- **Responsive**: Mobile-first design approach

---

## 📁 Project Structure

```
hades-tic-tac-toe/
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Game logic and AI
├── README.md           # This file
└── assets/             # Screenshots (if added)
```

---

## 🤝 Contributing

Contributions are welcome! Here are some ideas:

- [ ] Add more AI personalities/taunts
- [ ] Implement multiplayer mode
- [ ] Add custom sound effects
- [ ] Create different themes
- [ ] Add game statistics tracking
- [ ] Implement AI vs AI mode

### How to Contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🎯 Future Enhancements

- 🎭 **Multiple AI Personalities**: Different character themes
- 🏆 **Tournament Mode**: Best of 3, 5, or 7 games
- 📊 **Advanced Statistics**: Win/loss ratios, average game time
- 🎨 **Custom Themes**: Light mode, retro mode, neon mode
- 🌐 **Multiplayer**: Play against friends online
- 🤖 **AI vs AI**: Watch different AI strategies battle

---

## 🙏 Acknowledgments

- Inspired by classic Tic-Tac-Toe but with modern web technologies
- AI algorithm based on the minimax strategy
- Sound effects created using Web Audio API
- Design influenced by modern terminal/console aesthetics

---

## 📬 Contact

Created by **HadesIsOff** - feel free to contact me!

- 🐙 GitHub: [@HadesIsOff](https://github.com/HadesIsOff)

---

<div align="center">

**⭐ Star this repo if you enjoyed the game! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/HadesIsOff/tic-tac-toe?style=social)](https://github.com/HadesIsOff/hades-tic-tac-toe/stargazers)

*Made with ❤️ and JavaScript*

</div> 
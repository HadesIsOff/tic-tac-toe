class TicTacToe {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.playerScore = 0;
        this.aiScore = 0;
        this.isPlayerTurn = true;
        this.playerStreak = 0;
        this.aiStreak = 0;
        this.difficulty = 'medium'; 
        
        this.cells = document.querySelectorAll('.cell');
        this.currentPlayerDisplay = document.getElementById('currentPlayer');
        this.gameMessage = document.getElementById('gameMessage');
        this.playerScoreDisplay = document.getElementById('playerScore');
        this.aiScoreDisplay = document.getElementById('aiScore');
        this.restartBtn = document.getElementById('restartBtn');
        this.resetScoreBtn = document.getElementById('resetScoreBtn');
        
        this.winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        
        this.aiTaunts = {
            win: ["💀 REKT!", "🤖 Too Easy!", "⚡ Get Good!", "🔥 AI Supremacy!", "💥 Destroyed!"],
            lose: ["😤 Lucky Shot!", "🎯 Not Bad, Human!", "⭐ You Got Me!", "🏆 Impressive!", "💪 Well Played!"],
            draw: ["😐 Meh...", "🤝 I'll Allow It", "⚖️ Balanced", "🎭 Dramatic!", "🤔 Interesting..."]
        };
        
        this.initializeGame();
    }
    
    initializeGame() {
        this.cells.forEach((cell, index) => {
            cell.addEventListener('click', () => this.handleCellClick(index));
        });
        
        this.restartBtn.addEventListener('click', () => this.restartGame());
        this.resetScoreBtn.addEventListener('click', () => this.resetScore());
        
        
        this.difficultyBtns = document.querySelectorAll('.difficulty-btn');
        this.difficultyBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setDifficulty(e.target.dataset.difficulty));
        });
        
        this.updateDisplay();
    }
    
    handleCellClick(index) {
        if (!this.gameActive || this.board[index] !== '' || !this.isPlayerTurn) {
            return;
        }
        
        this.makeMove(index, 'X');
        
        if (this.gameActive && !this.isPlayerTurn) {
            setTimeout(() => this.aiMove(), 500);
        }
    }
    
    makeMove(index, player) {
        this.board[index] = player;
        this.cells[index].textContent = player;
        this.cells[index].classList.add(player === 'X' ? 'player-x' : 'player-o');
        
        
        this.playSound('move');
        
        if (this.checkWinner(player)) {
            this.gameActive = false;
            this.highlightWinningCells();
            
            if (player === 'X') {
                this.playerScore++;
                this.playerStreak++;
                this.aiStreak = 0;
                this.playSound('win');
                this.celebrateWin();
                const taunt = this.aiTaunts.lose[Math.floor(Math.random() * this.aiTaunts.lose.length)];
                this.showMessage(`You Win! ${taunt}`, 'win');
            } else {
                this.aiScore++;
                this.aiStreak++;
                this.playerStreak = 0;
                this.playSound('lose');
                this.shakeScreen();
                const taunt = this.aiTaunts.win[Math.floor(Math.random() * this.aiTaunts.win.length)];
                this.showMessage(`AI Wins! ${taunt}`, 'lose');
            }
            this.updateScoreDisplay();
        } else if (this.board.every(cell => cell !== '')) {
            this.gameActive = false;
            this.playerStreak = 0;
            this.aiStreak = 0;
            const taunt = this.aiTaunts.draw[Math.floor(Math.random() * this.aiTaunts.draw.length)];
            this.showMessage(`Draw! ${taunt}`, 'draw');
        } else {
            this.isPlayerTurn = !this.isPlayerTurn;
            this.updateDisplay();
        }
    }
    
    aiMove() {
        if (!this.gameActive) return;
        
        
        const mistakeChance = {
            'easy': 0.5,
            'medium': 0.25,
            'hard': 0.1
        };
        
        const shouldMakeMistake = Math.random() < mistakeChance[this.difficulty];
        
        if (shouldMakeMistake) {
            const availableMoves = this.board.map((cell, index) => cell === '' ? index : null).filter(cell => cell !== null);
            const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
            this.makeMove(randomMove, 'O');
        } else {
            const bestMove = this.minimax(this.board, 'O').index;
            this.makeMove(bestMove, 'O');
        }
    }
    
    minimax(board, player) {
        const availableMoves = board.map((cell, index) => cell === '' ? index : null).filter(cell => cell !== null);
        
        if (this.checkWinnerForBoard(board, 'X')) {
            return { score: -10 };
        } else if (this.checkWinnerForBoard(board, 'O')) {
            return { score: 10 };
        } else if (availableMoves.length === 0) {
            return { score: 0 };
        }
        
        const moves = [];
        
        for (let i = 0; i < availableMoves.length; i++) {
            const move = {};
            move.index = availableMoves[i];
            board[availableMoves[i]] = player;
            
            if (player === 'O') {
                const result = this.minimax(board, 'X');
                move.score = result.score;
            } else {
                const result = this.minimax(board, 'O');
                move.score = result.score;
            }
            
            board[availableMoves[i]] = '';
            moves.push(move);
        }
        
        let bestMove;
        if (player === 'O') {
            let bestScore = -10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            let bestScore = 10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
        
        return moves[bestMove];
    }
    
    checkWinner(player) {
        return this.checkWinnerForBoard(this.board, player);
    }
    
    checkWinnerForBoard(board, player) {
        return this.winningCombinations.some(combination => {
            return combination.every(index => board[index] === player);
        });
    }
    
    highlightWinningCells() {
        this.winningCombinations.forEach(combination => {
            if (combination.every(index => this.board[index] !== '' && this.board[index] === this.board[combination[0]])) {
                combination.forEach(index => {
                    this.cells[index].classList.add('winning');
                });
            }
        });
    }
    
    showMessage(text, type) {
        this.gameMessage.textContent = text;
        this.gameMessage.className = `message ${type}`;
        this.currentPlayerDisplay.textContent = 'Game Over';
    }
    
    updateDisplay() {
        if (this.gameActive) {
            this.currentPlayerDisplay.textContent = this.isPlayerTurn ? 'Your Turn' : 'AI Turn';
            this.gameMessage.textContent = '';
            this.gameMessage.className = 'message';
        }
    }
    
    updateScoreDisplay() {
        this.playerScoreDisplay.textContent = this.playerScore;
        this.aiScoreDisplay.textContent = this.aiScore;
        
        
        if (this.playerStreak >= 2) {
            this.playerScoreDisplay.textContent += ` 🔥${this.playerStreak}`;
        }
        if (this.aiStreak >= 2) {
            this.aiScoreDisplay.textContent += ` 🤖${this.aiStreak}`;
        }
    }
    
    celebrateWin() {
        document.body.style.animation = 'celebrateFlash 0.5s ease';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);
        
        
        this.createConfetti();
    }
    
    shakeScreen() {
        document.body.style.animation = 'screenShake 0.5s ease';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);
    }
    
    createConfetti() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.textContent = ['🎉', '✨', '🌟', '💫', '🎊'][Math.floor(Math.random() * 5)];
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-50px';
                confetti.style.fontSize = '2rem';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '1000';
                confetti.style.animation = 'confettiFall 2s ease-out forwards';
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 2000);
            }, i * 50);
        }
    }
    
    playSound(type) {
        
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        if (type === 'move') {
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } else if (type === 'win') {
            oscillator.frequency.setValueAtTime(523, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } else if (type === 'lose') {
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.4);
        }
    }
    
    restartGame() {
        this.board = Array(9).fill('');
        this.gameActive = true;
        this.isPlayerTurn = true;
        
        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.className = 'cell';
        });
        
        this.updateDisplay();
    }
    
    resetScore() {
        this.playerScore = 0;
        this.aiScore = 0;
        this.playerStreak = 0;
        this.aiStreak = 0;
        this.updateScoreDisplay();
        this.restartGame();
    }
    
    setDifficulty(level) {
        this.difficulty = level;
        this.difficultyBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-difficulty="${level}"]`).classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
}); 
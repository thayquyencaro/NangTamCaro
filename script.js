document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const login = document.getElementById('login');

    // Tạo bảng cờ
    for (let i = 0; i < 400; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);
    }

    let currentPlayer = 'X';
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '') {
                cell.textContent = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    window.startGame = function() {
        const player1 = document.getElementById('player1').value;
        const player2 = document.getElementById('player2').value;

        if (player1 && player2) {
            login.style.display = 'none';
            board.style.display = 'grid';
            alert(`Game started! ${player1} vs ${player2}`);
        } else {
            alert('Please enter names for both players.');
        }
    };
});

document.querySelectorAll('.cyber-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Удаляем активный класс у всех кнопок
        document.querySelectorAll('.cyber-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Получаем данные участника
        const member = this.dataset.member;
        const infoContainer = document.getElementById('member-info');
        
        let content = '';
        switch(member) {
            case 'fazzyt':
                content = `
                    <div class="member-header neon-cyan mb-3">
                        <h3>fazzyt</h3>
                    </div>
        
                    <div class="project-info">
                        <p>РОЛЬ: <span class="neon-red">основатель команды</span></p>
                        <p>ДОЛЖНОСТЬ: <span class="neon-red">кодер, data scientist</span></p>
                    </div>

                    <div class="attributes mt-4">
                        <p>ПОЛ: <span class="neon-cyan">Мужской</span></p>
                        <p>ХОББИ: <span class="neon-cyan">Есть детей</span></p>
                    </div>
                `;
                break;
            case 'nullpointer':
                content = `
                    <div class="member-header neon-cyan mb-3">
                        <h3>NullPointerExceptionOwO</h3>
                    </div>
        
                    <div class="project-info">
                        <p>РОЛЬ: <span class="neon-red">Перичуркобес</span></p>
                        <p>ДОЛЖНОСТЬ: <span class="neon-red">кодер, тех-админ</span></p>
                    </div>

                    <div class="attributes mt-4">
                        <p>ПОЛ: <span class="neon-cyan">gnu linux</span></p>
                        <p>ХОББИ: <span class="neon-cyan">мучать ИИ</span></p>
                    </div>
                `;
                break;
            case 'vednees':
                content = `
                    <div class="member-header neon-cyan mb-3">
                        <h3>vednees</h3>
                    </div>
        
                    <div class="project-info">
                        <p>РОЛЬ: <span class="neon-red">идеолог</span></p>
                        <p>ДОЛЖНОСТЬ: <span class="neon-red">дизайнер</span></p>
                    </div>

                    <div class="attributes mt-4">
                        <p>ПОЛ: <span class="neon-cyan">Мужской</span></p>
                        <p>ХОББИ: <span class="neon-cyan">кучеряво базарить</span></p>
                    </div>
                `;
                break;
        }
        
        infoContainer.innerHTML = content;
    });
});

// Активируем первую кнопку по умолчанию
document.querySelector('.cyber-btn').click();
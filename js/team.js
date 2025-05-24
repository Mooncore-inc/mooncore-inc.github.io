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
                        <p>РОЛЬ: <span class="neon-red">перичуркобес</span></p>
                        <p>ДОЛЖНОСТЬ: <span class="neon-red">кодер, тех-админ</span></p>
                    </div>

                    <div class="attributes mt-4">
                        <p>ПОЛ: <span class="neon-cyan">BSD</span></p>
                        <p>ХОББИ: <span class="neon-cyan">Мучать ИИ</span></p>
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
                        <p>ХОББИ: <span class="neon-cyan">Кучеряво базарить</span></p>
                    </div>
                `;
                break;
            
            case 'terrorlxvely':
                    content = `
                    <div class="member-header neon-cyan mb-3">
                        <h3>terrorlxvely</h3>
                    </div>
            
                    <div class="project-info">
                        <p>РОЛЬ: <span class="neon-red">контроль качества</span></p>
                        <p>ДОЛЖНОСТЬ: <span class="neon-red">админ</span></p>
                    </div>
    
                    <div class="attributes mt-4">
                        <p>ПОЛ: <span class="neon-cyan">Мужской</span></p>
                        <p>ХОББИ: <span class="neon-cyan">Хлопать жопой</span></p>
                    </div>
                `;
                break;
            
            case 'WWF':
                    content = `
                    <div class="member-header neon-cyan mb-3">
                        <h3>WWF</h3>
                    </div>
            
                    <div class="project-info">
                        <p>РОЛЬ: <span class="neon-red">главный по идеям</span></p>
                        <p>ДОЛЖНОСТЬ: <span class="neon-red">управление аудиторией, пиар</span></p>
                    </div>
    
                    <div class="attributes mt-4">
                        <p>ПОЛ: <span class="neon-cyan">Пингвин</span></p>
                        <p>ХОББИ: <span class="neon-cyan">Пинать хуи</span></p>
                    </div>
                `;
                break;
            
            case 'mloob':
                    content = `
                    <div class="member-header neon-cyan mb-3">
                        <h3>mloob</h3>
                    </div>
            
                    <div class="project-info">
                        <p>РОЛЬ: <span class="neon-red">глава cлужбы безопасности</span></p>
                        <p>ДОЛЖНОСТЬ: <span class="neon-red">эксперт в сфере СИ и ИБ</span></p>
                    </div>
    
                    <div class="attributes mt-4">
                        <p>ПОЛ: <span class="neon-cyan">Мужской</span></p>
                        <p>ХОББИ: <span class="neon-cyan">Разводить межрасовые войны</span></p>
                    </div>
                `;
                break;
        }
        
        infoContainer.innerHTML = content;
    });
});

// Активируем первую кнопку по умолчанию
document.querySelector('.cyber-btn').click();

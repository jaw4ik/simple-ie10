﻿$(function () {

    window.getTranslations = function() {
        return {
            en: [
                { key: '[course]', value: 'Course:' },
                { key: '[start course]', value: 'Start course' },
                { key: '[finish course]', value: 'Finish course' },
                { key: '[learning objectives]', value: 'Learning objectives:' },
                { key: '[start]', value: 'Start' },
                { key: '[home]', value: 'Home' },
                { key: '[learning content]', value: 'Learning content' },
                { key: '[submit]', value: 'Submit' },
                { key: '[try again]', value: 'Try again' },
                { key: '[next]', value: 'Next' },
                { key: '[correct answer]', value: 'Correct answer' },
                { key: '[incorrect answer]', value: 'Incorrect answer' },
                { key: '[previous question]', value: 'previous' },
                { key: '[next question]', value: 'next' },
                { key: '[of]', value: 'of' },
                { key: '[to complete]', value: 'to complete' },
                { key: '[text matching question hint]', value: 'Drag items from right column to the left to match the pairs' },
                { key: '[text matching question drop here]', value: 'Drop here' },
                { key: '[statement question true text]', value: 'True' },
                { key: '[statement question false text]', value: 'False' },
                { key: '[drag and drop question all texts are placed]', value: 'All texts are placed' },
                { key: '[drag and drop question drop here]', value: 'Drop here' },
                { key: '[fill in the blank choose answer]', value: 'Choose the answer...' },
                { key: '[thank you message]', value: 'Thank you, you can close the page now' },
                { key: '[there are no questions]', value: 'No questions' },
                { key: '[browser not supported]', value: 'Your browser is currently not supported.' },
                { key: '[browser not supported hint]', value: 'Don’t worry, there is an easy fix. All you have to do is click one of the icons below and follow the instructions.' },
                { key: '[page not found title]', value: 'Page not found (404)' },
                { key: '[page not found message]', value: "Sorry, the page you have been looking for has not been found. Try checking the URL on errors, use the navigation above or click 'Home' link below." },
                { key: '[tracking and tracing header]', value: 'Your credentials for progress tracking' },
                { key: '[tracking and tracing hint]', value: 'Please enter your credentials and click "Start and report my results "to enable result tracking. Otherwise, click "Do not report, just start".' },
                { key: '[tracking and tracing name field]', value: 'Your name' },
                { key: '[tracking and tracing email field]', value: 'Your e-mail' },
                { key: '[tracking and tracing name is not valid]', value: 'Fill in your name' },
                { key: '[tracking and tracing email is not valid]', value: 'Enter a valid e-mail' },
                { key: '[tracking and tracing skip reporting]', value: 'Do not report, just start' },
                { key: '[tracking and tracing start]', value: 'Start and report my results' },
                { key: '[tracking and tracing error]', value: 'Something is wrong' },
                { key: '[tracking and tracing error hint]', value: 'If you continue without restarting, your learning results will not be reported.' },
                { key: '[tracking and tracing restart course]', value: 'Restart course' },
                { key: '[tracking and tracing continue anyway]', value: 'Continue anyway' },
                { key: '[tracking and tracing reporting progress]', value: 'reporting results...' }
            ],

            nl: [
                { key: '[course]', value: 'Cursus:' },
                { key: '[start course]', value: 'Start cursus' },
                { key: '[finish course]', value: 'Stop cursus' },
                { key: '[learning objectives]', value: 'Leerdoelen:' },
                { key: '[start]', value: 'Start' },
                { key: '[home]', value: 'Home' },
                { key: '[learning content]', value: 'Leerstof' },
                { key: '[submit]', value: 'Invoeren' },
                { key: '[try again]', value: 'Probeer opnieuw' },
                { key: '[next]', value: 'Volgende' },
                { key: '[correct answer]', value: 'Juist antwoord' },
                { key: '[incorrect answer]', value: 'Onjuist antwoord' },
                { key: '[previous question]', value: 'Vorige' },
                { key: '[next question]', value: 'Volgende' },
                { key: '[of]', value: 'van' },
                { key: '[to complete]', value: 'compleet' },
                { key: '[text matching question hint]', value: 'Sleep items van de rechterkolom naar links om kloppende paren te maken' },
                { key: '[text matching question drop here]', value: 'Plaats hier' },
                { key: '[statement question true text]', value: 'Waar' },
                { key: '[statement question false text]', value: 'Niet waar' },
                { key: '[drag and drop question all texts are placed]', value: 'Alle teksten zijn geplaatst' },
                { key: '[drag and drop question drop here]', value: 'Plaats hier' },
                { key: '[fill in the blank choose answer]', value: 'Kies het antwoord…' },
                { key: '[thank you message]', value: 'Bedankt, je kan nu de pagina sluiten' },
                { key: '[there are no questions]', value: 'Geen vragen' },
                { key: '[browser not supported]', value: 'Uw browser wordt niet ondersteund.' },
                { key: '[browser not supported hint]', value: 'Maak je geen zorgen er is een simpeleoplossing. Klik op een van de iconen beneden en volg de instructies' },
                { key: '[page not found title]', value: 'Pagina niet gevonden (404)' },
                { key: '[page not found message]', value: "Sorry, de pagina is niet gevonden. Controleer de link of klik op home." },
                { key: '[tracking and tracing header]', value: 'Je gegevens om de resultaten op te slaan' },
                { key: '[tracking and tracing hint]', value: "Vul je gegevens in en druk op 'Start en leg mijn resultaten vast'. Of klik op 'leg mijn resultaten niet vast'" },
                { key: '[tracking and tracing name field]', value: 'Naam' },
                { key: '[tracking and tracing email field]', value: 'Email' },
                { key: '[tracking and tracing name is not valid]', value: 'Vul je naam in' },
                { key: '[tracking and tracing email is not valid]', value: 'Voer een geldig email adres in' },
                { key: '[tracking and tracing skip reporting]', value: 'Leg mijn resultaten niet vast' },
                { key: '[tracking and tracing start]', value: 'Start en leg mijn resultaten vast' },
                { key: '[tracking and tracing error]', value: 'Er is iets misgegaan' },
                { key: '[tracking and tracing error hint]', value: 'Als je doorgaat worden je leerresultaten niet vastgelegd' },
                { key: '[tracking and tracing restart course]', value: 'Herstart cursus' },
                { key: '[tracking and tracing continue anyway]', value: 'Ga door' },
                { key: '[tracking and tracing reporting progress]', value: 'Resultaten vastleggen...' }
            ],
            ua: [
                { key: "[course]", value: "Курс :" },
                { key: "[start course]", value: "Почати курс" },
                { key: "[finish course]", value: "Закінчити курс" },
                { key: "[learning objectives]", value: "Мета навчання:" },
                { key: "[start]", value: "Почати" },
                { key: "[home]", value: "Головна" },
                { key: "[learning content]", value: "Навчальний матеріал" },
                { key: "[submit]", value: "Відповісти" },
                { key: "[try again]", value: "Спробувати ще" },
                { key: "[next]", value: "Далі" },
                { key: "[correct answer]", value: "Правильна відповідь" },
                { key: "[incorrect answer]", value: "Неправильна відповідь" },
                { key: "[previous question]", value: "Назад" },
                { key: "[next question]", value: "Вперед" },
                { key: '[of]', value: 'з' },
                { key: '[to complete]', value: 'для досягнення цілі' },
                { key: "[text matching question hint]", value: "Перетягніть відповіді з правої колонки до лівої таким чином, щоб вони відповідали визначенням з першої колонки" },
                { key: "[text matching question drop here]", value: "Сюди" },
                { key: "[statement question true text]", value: "Вірно" },
                { key: "[statement question false text]", value: "Невірно" },
                { key: "[drag and drop question all texts are placed]", value: "Усі тексти вже використані" },
                { key: "[drag and drop question drop here]", value: "Сюди" },
                { key: "[fill in the blank choose answer]", value: "Оберіть варіант..." },
                { key: "[thank you message]", value: "Дякуємо. Тепер сторінку можна закрити" },
                { key: "[there are no questions]", value: "Питання відсутні" },
                { key: "[browser not supported]", value: "Ваш браузер не підтримується" },
                { key: "[browser not supported hint]", value: "Не хвилюйтеся, це легко виправити. Все, що вам потрібно - це натиснути на одну з іконок, розташованих нижче і дотримуватись інструкцій" },
                { key: "[page not found title]", value: "Сторінка не знайдена (404)" },
                { key: "[page not found message]", value: "Вибачте, але сторінку, яку ви шукали, не знайдено. Спробуйте перевірити URL на помилки, використати навігацію вище або посилання на головну сторінку нижче." },
                { key: "[tracking and tracing header]", value: "Ваші дані для відправки результатів" },
                { key: "[tracking and tracing hint]", value: "Будь-ласка, вкажіть необхідні дані та натисніть \"Так, відстежувати мій прогрес\" для того, щоб відправляти результати. Якщо Ви не бажаєте відстежувати прогрес, натисніть \"Пропустити цей крок\"" },
                { key: "[tracking and tracing name field]", value: "Ваше ім'я" },
                { key: "[tracking and tracing email field]", value: "Ваша електронна адреса" },
                { key: "[tracking and tracing name is not valid]", value: "Вкажіть Ваше ім'я" },
                { key: "[tracking and tracing email is not valid]", value: "Вкажіть дійсну електронну адресу" },
                { key: "[tracking and tracing skip reporting]", value: "Пропустити цей крок" },
                { key: "[tracking and tracing start]", value: "Так, відстежувати мій прогрес" },
                { key: "[tracking and tracing error]", value: "Помилка" },
                { key: "[tracking and tracing error hint]", value: "Натисніть 'Спробувати ще'. Якщо помилка повторюється і ви бажаєте продовжити курс без відправки результатів - натисніть 'Продовжити'." },
                { key: "[tracking and tracing restart course]", value: "Спробувати ще" },
                { key: "[tracking and tracing continue anyway]", value: "Продовжити" },
                { key: "[tracking and tracing reporting progress]", value: "Надсилаемо прогресс..." }
            ],
            cn: [
                { key: "[course]", value: "课程：" },
                { key: "[start course]", value: "开始课程" },
                { key: "[finish course]", value: "结束课程" },
                { key: "[learning objectives]", value: "学习目标：" },
                { key: "[start]", value: "开始" },
                { key: "[home]", value: "主页" },
                { key: "[learning content]", value: "学习内容" },
                { key: "[submit]", value: "提交" },
                { key: "[try again]", value: "重试" },
                { key: "[next]", value: "下一步" },
                { key: "[correct answer]", value: "答案正确" },
                { key: "[incorrect answer]", value: "答案错误" },
                { key: "[previous question]", value: "前一页" },
                { key: "[next question]", value: "下一步" },
                { key: '[of]', value: '只' },
                { key: '[to complete]', value: '完成' },
                { key: "[text matching question hint]", value: "把选项从右列拖到左边以配对" },
                { key: "[text matching question drop here]", value: "放到这里" },
                { key: "[statement question true text]", value: "正确" },
                { key: "[statement question false text]", value: "错误" },
                { key: "[drag and drop question all texts are placed]", value: "所有文本归位" },
                { key: "[drag and drop question drop here]", value: "放到这里" },
                { key: "[fill in the blank choose answer]", value: "选择答案…" },
                { key: "[thank you message]", value: "谢谢，你现在可以关闭此页面。" },
                { key: "[there are no questions]", value: "没有问题" },
                { key: "[browser not supported]", value: "你的浏览器不支持" },
                { key: "[browser not supported hint]", value: "别担心，有简答的修复方法。你只需要点击下面的其中一个按钮，跟着提示操作就可以了。" },
                { key: "[page not found title]", value: "页面没找到（404）" },
                { key: "[page not found message]", value: "Sorry，你要找的页面没有发现。请检查URL是否有错误，请使用上面的导航栏或点击下面的“主页”链接。" },
                { key: "[tracking and tracing header]", value: "你的用来跟踪进度的证书" },
                { key: "[tracking and tracing hint]", value: "请输入你的证书然后点击“开始并报告我的结果”以启动结果跟踪，否则，点击“不报告，只是开始”。" },
                { key: "[tracking and tracing name field]", value: "你的姓名" },
                { key: "[tracking and tracing email field]", value: "你的e-mail" },
                { key: "[tracking and tracing name is not valid]", value: "输入你的姓名" },
                { key: "[tracking and tracing email is not valid]", value: "输入有效的e-mail" },
                { key: "[tracking and tracing skip reporting]", value: "不报告，只是开始" },
                { key: "[tracking and tracing start]", value: "开始并报告我的结果" },
                { key: "[tracking and tracing error]", value: "出错了" },
                { key: "[tracking and tracing error hint]", value: "如果你不重新开始，仍然继续，你的学习结果将不会被报告。" },
                { key: "[tracking and tracing restart course]", value: "重新开始课程" },
                { key: "[tracking and tracing continue anyway]", value: "仍然继续" },
                { key: "[tracking and tracing reporting progress]", value: "正在报告结果" }
            ],
            it: [
                { key: "[course]", value: "Corso" },
                { key: "[start course]", value: "Inizio del corso" },
                { key: "[finish course]", value: "Fine del corso" },
                { key: "[learning objectives]", value: "Obiettivi di apprendimento" },
                { key: "[start]", value: "Inizio" },
                { key: "[home]", value: "Home - Pagina principale" },
                { key: "[learning content]", value: "Contenuto" },
                { key: "[submit]", value: "Invia" },
                { key: "[try again]", value: "Riprova" },
                { key: "[next]", value: "Prossimo" },
                { key: "[correct answer]", value: "Risposta corretta" },
                { key: "[incorrect answer]", value: "Risposta incorretta" },
                { key: "[previous question]", value: "precedente" },
                { key: "[next question]", value: "prossimo" },
                { key: '[of]', value: 'su' },
                { key: '[to complete]', value: 'da completare' },
                { key: "[text matching question hint]", value: "Trascina gli oggetti da destra a sinistra e abbina le coppie corrette" },
                { key: "[text matching question drop here]", value: "Rilascia qui" },
                { key: "[statement question true text]", value: "VERO" },
                { key: "[statement question false text]", value: "FALSO" },
                { key: "[drag and drop question all texts are placed]", value: "Tutti i testi sono settati" },
                { key: "[drag and drop question drop here]", value: "Rilascia qui" },
                { key: "[fill in the blank choose answer]", value: "Scegli una risposta" },
                { key: "[thank you message]", value: "Grazie. Ora puoi chiudere la pagina." },
                { key: "[there are no questions]", value: "Non ci sono domande" },
                { key: "[browser not supported]", value: "Questo browser non è al momento supportato." },
                { key: "[browser not supported hint]", value: "Clicca le icone in basso e segui le istruzioni." },
                { key: "[page not found title]", value: "Pagina non trovata [404]" },
                { key: "[page not found message]", value: "Siamo spiacenti. La pagina cercata non è stata trovata. Controlla se ci sono errori nell'URL, utilizza la barra di navigazione sopra o clicca il link 'Home' sotto." },
                { key: "[tracking and tracing header]", value: "Le tue credenziali per tenere traccia dei progressi" },
                { key: "[tracking and tracing hint]", value: "Inserisci le tue credenziali e clicca “Comincia e tieni traccia dei miei risultati” abilita la tracciatura. Oppure clicca “Inizia senza verificare”." },
                { key: "[tracking and tracing name field]", value: "Nome" },
                { key: "[tracking and tracing email field]", value: "Indirizzo e-mail" },
                { key: "[tracking and tracing name is not valid]", value: "Completa con il tuo nome" },
                { key: "[tracking and tracing email is not valid]", value: "Inserisci un indirizzo e-mail valido" },
                { key: "[tracking and tracing skip reporting]", value: "Inizia senza verificare" },
                { key: "[tracking and tracing start]", value: "Comincia e tieni traccia dei miei risultati" },
                { key: "[tracking and tracing error]", value: "Qualcosa non funziona" },
                { key: "[tracking and tracing error hint]", value: "Se continui senza riavviare, i tuoi risultati di apprendimento non saranno registrati." },
                { key: "[tracking and tracing restart course]", value: "Riavvia il corso" },
                { key: "[tracking and tracing continue anyway]", value: "Continua lo stesso" },
                { key: "[tracking and tracing reporting progress]", value: "reporting results..." }
            ]
        };
    }
});


# LG Web Remote v0.1

Рабочая база React/Vite приложения.

## Реализовано
- SSAP WebSocket к LG TV на `TV_IP:3000`.
- Pairing и сохранение clientKey.
- Pointer Input Socket.
- Back / Home / Mute / volume.
- RU и EN клавиатура.
- IME insertText + Enter.
- Цифровой ввод канала до 3 цифр.
- `ssap://tv/openChannel`.
- CH+ / CH− отсутствуют.
- Нижнее меню Пульт / Клавиатура / Цифры.

## Запуск
npm install
npm run dev

Важно: браузерная версия может столкнуться с ограничениями `ws://` из HTTPS/PWA на iOS. Если это проявится, следующий шаг — Capacitor/native networking с тем же React UI.

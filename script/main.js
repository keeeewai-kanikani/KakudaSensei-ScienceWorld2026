document.addEventListener('DOMContentLoaded', () => {
    // left-panel 要素を取得
    const blocklyArea = document.getElementById('left-panel');

    // Blocklyのワークスペースを注入 (inject)
    const workspace = Blockly.inject(blocklyArea, {
        toolbox: document.getElementById('toolbox'),
        scrollbars: true,
        trashcan: true,
        move: {
            scrollbars: {
                horizontal: true,
                vertical: true
            },
            drag: true,
            wheel: true
        }
    });

    // ウィンドウのリサイズイベントでBlocklyのサイズを自動調整
    window.addEventListener('resize', () => {
        Blockly.svgResize(workspace);
    }, false);
    
    // 初期化直後に一度リサイズイベントを発火させて枠にぴったりはめる
    Blockly.svgResize(workspace);
});

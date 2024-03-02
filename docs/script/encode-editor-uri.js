function generateEditorURL(TheExampleHtmlContent) {
    const encodedContent = encodeURIComponent(TheExampleHtmlContent);
    const editorURL = "online-html-editor.html?example=" + encodedContent;
    return editorURL;
}
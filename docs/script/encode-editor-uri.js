function generateEditorURL(TheExampleHtmlContent) {
    const encodedContent = encodeURIComponent(TheExampleHtmlContent);
    const editorURL = "/?example=" + encodedContent;
    return editorURL;
}

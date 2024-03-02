function generateEditorURL(TheExampleHtmlContent) {
    const encodedContent = encodeURIComponent(TheExampleHtmlContent);
    const editorURL = "https://01one.github.io/online-html-editor/?example=" + encodedContent;
    return editorURL;
}

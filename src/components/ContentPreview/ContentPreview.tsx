export interface ContentPreviewProps {
    content: any;
}

const ContentPreview: React.FC<ContentPreviewProps> = ({ content }) => {
    return (
        <div className="ContentPreview">
            {content ? (
            <div>{typeof content === 'object' ? JSON.stringify(content) : content}</div>
            ) : (
            <>
                <h2>Content Preview</h2>
                <p>Click on a navigation item to view content</p>
            </>
            )}
        </div>
    );
};

export default ContentPreview;
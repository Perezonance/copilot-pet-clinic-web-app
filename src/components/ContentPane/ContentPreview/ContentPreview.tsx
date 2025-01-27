import { useEffect, useState } from "react";
import { AppointmentView } from "../../AppointmentView/AppointmentView";

export interface ContentPreviewProps {
    content: any;
}

const ContentPreview: React.FC<ContentPreviewProps> = ({ content }) => {
    const [selectedContent, setSelectedContent] = useState<any>(null);

    useEffect(() => {
        setSelectedContent(undefined);
    }, [content, selectedContent]);

    return (
        <div className="ContentPreview">
            {content ? content : (
            <>
                <h2>Content Preview</h2>
                <p>Click on a navigation item to view content</p>
            </>
            )}
        </div>
    );
};

export default ContentPreview;
import { Editor } from "./Editor"
import { ToolBar } from "./tool-bar/ToolBar"

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>
}

const DocumentPage = async ({ params }: DocumentIdPageProps) => {
    const { documentId } = await params

    return (
        <div className="min-h-screen bg[#FAFBFD]">
            <ToolBar/>
            <Editor />
        </div>

    )
}

export default DocumentPage
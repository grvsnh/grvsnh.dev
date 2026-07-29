import { loremIpsum } from "@/components/portfolio/cabinet-layout";
import {
    FileCaption,
    FileContent,
    FileHeader,
    FileImage,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";
import purepixelImg from "@/assets/images/portfolio/purepixel.png";

const ResearchFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Research</FileTitle>
                    <FileCaption>2026</FileCaption>
                </FileHeader>
                <FileText>{loremIpsum}</FileText>
            </FileInfo>
            <FileImage>
                <img src={purepixelImg} alt="Research Lab" className="h-full w-full object-cover rounded-xs" />
            </FileImage>
        </FileContent>
    );
};

export default ResearchFile;

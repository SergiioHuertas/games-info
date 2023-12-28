import {Card, CardContent, CardHeader} from "@/components/ui/Card";
import {config} from "@/config";

export default function GamesContainerSkeleton() {
    const itemsPerPage = config.common.itemsPerPage;

    return (
        <div className="grid grid-cols-3 gap-4">
            {Array(itemsPerPage).fill(0).map((el, index) => (
            <Card key={index}>
                <CardHeader>
                    <div className="h-6 bg-gray-700 animate-pulse" />
                </CardHeader>
                <div className="w-full h-40 bg-gray-700 animate-pulse" />
                <CardContent>
                    <div className="h-4 bg-gray-700 animate-pulse mb-2" />
                    <div className="h-4 bg-gray-700 animate-pulse w-3/4" />
                </CardContent>
            </Card>
        ))}
        </div>
    )
}
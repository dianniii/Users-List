import { Skeleton } from "@/components/ui/skeleton";

export default function UserLoading() {
    return (
        <div className="space-y-4">
            <Skeleton className="h-8 w-1/3" />
                {Array.from({ length: 7 }).map((_, id) => (
            <Skeleton key={id} className="h-4 w-full" />
        ))}
    </div>
    );
}

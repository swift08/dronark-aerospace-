export function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin"
          aria-hidden
        />
        <span className="text-sm text-muted-foreground">Loading...</span>
      </div>
    </div>
  );
}

export default function Template({ children }: { children: React.ReactNode }) {
    return <div>
        <div>first template</div>
        {children}
    </div>
}
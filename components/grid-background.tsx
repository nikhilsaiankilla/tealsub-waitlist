import {
    UserPlus,
    Mail,
    Send,
    CheckCircle,
    Eye,
    Clock,
} from "lucide-react"


const GridBackground = () => {
    // We'll create a grid of ~100 cells. 
    // We manually pick "random" indices to place content so they don't overlap the main text.
    // Indices 0-11 are the top row, etc. (assuming 12 columns).

    const iconClass =
        "w-3 h-3"

    const items = {
        3: (
            <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium animate-fade-in">
                <UserPlus className={iconClass} />
                New subscriber
            </span>
        ),

        16: (
            <span className="flex items-center gap-1.5 text-neutral-500 text-[10px] font-mono animate-fade-in">
                <Mail className={iconClass} />
                reader@domain.com
            </span>
        ),

        21: (
            <span className="flex items-start text-left gap-1.5 text-neutral-500 text-[10px] font-mono animate-fade-in">
                <Send className={iconClass} />
                Sent to 124 readers
            </span>
        ),

        25: (
            <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium animate-fade-in">
                <CheckCircle className={iconClass} />
                Delivered
            </span>
        ),

        34: (
            <span className="flex items-start text-left gap-1.5 text-neutral-400 text-[10px] font-mono animate-fade-in">
                <Mail className={iconClass} />
                Newsletter issue #12
            </span>
        ),

        45: (
            <span className="flex items-center gap-1.5 text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium animate-fade-in">
                <UserPlus className={iconClass} />
                Subscribed
            </span>
        ),

        50: (
            <span className="flex items-center gap-1.5 text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium animate-pulse-soft">
                <Clock className={iconClass} />
                Sending…
            </span>
        ),

        59: (
            <span className="flex items-center gap-1.5 text-neutral-400 text-[10px] font-mono animate-fade-in">
                <Eye className={iconClass} />
                Opened by 62 readers
            </span>
        ),
    }

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none hidden md:block">
            {/* This mask fades the grid out at the bottom and sides 
        so it blends into the page naturally 
      */}
            <div className="absolute inset-0 mask-[radial-gradient(ellipse_at_center,black_40%,transparent_80%)]">
                <div className="grid grid-cols-6 md:grid-cols-12 h-full">
                    {[...Array(96)].map((_, i) => (
                        <div
                            key={i}
                            className="relative border-r border-b border-neutral-200/60 h-24 md:h-32 p-2 flex items-start justify-start overflow-hidden"
                        >
                            {/* Only render content if this index exists in our items object */}
                            {items[i as keyof typeof items] && (
                                <div className="animate-fade-in opacity-90">
                                    {items[i as keyof typeof items]}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GridBackground
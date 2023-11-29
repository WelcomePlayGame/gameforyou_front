export interface Crumbs {
    crumbs: 
        {
            label: string,
            url: string,
        } []
    ;
}

export const Breadcrumbs = ({ crumbs }: Crumbs) => {
    return (
        <section>
            <div className="breadcrumbs">
                {
                    crumbs.map((crumb: any, index: any) => {
                        return (
                            <span key={index}>
                                <a href={crumb.url} className="breadcrumps_a">{crumb.label}</a>
                                {index < crumbs.length - 1 && <span> / </span>}
                            </span>
                        )
                    })
                }
            </div>
        </section>
    )
}

import { Skeleton } from '../'

export const LoadingItem = ({layout, index}) => {
    return (
        <div
            className={`artist-item flex align-center bg-hover${layout === 'list_layout' ? ' py-1 px-3' : ''}`}
            style={{
                ['--order']: `${index}`
            }}
        >
            {layout === 'list_layout' ? (
            <>
            {index && 
                <span className="pr-1 mx-w-fs title-3 text-menu item-anim">
                {index}
                </span>
            }
            <div className="flex align-center flex-grow">
            <Skeleton
                animation={'wave'}
                className="img-cover img-cover-l h-100"
            />
            <div className="flex flex-col flex-grow item-anim">
                <Skeleton className="" width={80} height={20} animation={'wave'}/>
                <Skeleton className="mt-4" width={150} height={15} animation={'wave'}/>
            </div>
        </div>
        </>
        ) : (
        <>
            <Skeleton
                animation={'wave'}
                className="img-cover img-cover-grid"
            />
        </>
        )}
        </div>
    )
}

export default LoadingItem
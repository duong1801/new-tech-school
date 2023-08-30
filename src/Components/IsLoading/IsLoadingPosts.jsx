import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function IsLoadingPosts() {
    return (
        <>
          {
            new Array(3).fill(0).map((_, index) => {
              return (
                <div key={index} style={{ lineHeight: "1" }} className="d-flex post-item mb-3 border rounded bg-white">
                  <div>
                    <Skeleton width={400} height={356} />
                  </div>
                  <div className="py-2 px-4 w-100">
                    <Skeleton className="mt-3" height={35} width={250} />
                    <div className="my-3">
                      <Skeleton className="my-1" count={8} />
                    </div>
                    <Skeleton width={120} />
                  </div>
                </div>
              )
            })
          }
        </>
      )
}

/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 29/03/2024 16:08:13
*/
import React, { FC, useEffect, useState } from 'react';
// import Loading from '../Loading/Loading';
import './PageComponent.css';
import { Navigate, useParams } from 'react-router-dom';
import { Page } from '../../models/Page';
import { getDatasBySlug } from '../../api/entities';
import PageBanner from '../../components/PageBanner/PageBanner';
import Loading from '../../components/Loading/Loading';
import { RequestResponse } from '../../models/requestResponse';


interface PageComponentProps {

}


const PageComponent: FC<PageComponentProps> = () => {

  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<Page | null>(null);
  let { slug } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      if (slug) {
        const pages: RequestResponse = await getDatasBySlug("page", slug)
        if (pages.isSuccess) {
          setPage(pages.result)
          setLoading(false)
        } else {
          slug = undefined
          setError(true)
        }
      }


    }
    runLocalData()
  }, [slug])

  if (!slug) {
    return <Navigate to={"/error"} />

  }

  if (error) {
    return <Navigate to={"/error"} />

  }
  return (
    <div className="Page">
      {
        !loading && page ?
          <>


            <PageBanner name={page!.name} />
            <div className="container"
              dangerouslySetInnerHTML={{ __html: page?.content }}
            />


          </>
          :
          <Loading />
      }

    </div>
  );

}

export default PageComponent;
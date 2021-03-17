import React from "react";
import useFetch from "../../components/helpers/useFetch";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";
import NotFoundSvg from "../../components/NotFoundSvg";

export default function SearchPage() {
  const router = useRouter();
  const { data } = useFetch("/api/search?s=");

  if (data?.notFound) {
    return (
      <>
        <Header></Header>
        <NotFoundSvg />
      </>
    );
  }

  if (data?.searchResult.length === 1)
    router.push("/chart/" + data.searchResult[0].Title);

  return (
    <div className="container">
      <Header></Header>
      {data ? (
        <ul>
          {data.searchResult.length > 1 &&
            data.searchResult.map((e) => {
              return (
                <li key={e.imdbID}>
                  <Link href={`/chart/${e.Title}`}>
                    <img src={e.Poster}></img>
                  </Link>
                </li>
              );
            })}
        </ul>
      ) : (
        <Spinner />
      )}

      <style jsx>{`
        .container {
          height: 100%;
        }
				
        ul {
					max-width: 1200px;
          margin: 0 auto;
          padding-top: 2rem;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          row-gap: 0.5rem;
        }
        li {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: start;
        }
        img {
          will-change: height;
          transition: all 190ms ease;
          border-radius: 4px;
					height: 350px;
					object-fit: cover;
          object-position: center;
          border: 2px solid var;
					transform: scale(.9);
          border-radius: 8px;   
        }
        img:hover {
					transform:scale(1);
        }
        header {
					max-width:800px;
          margin:0 auto;
					display: flex;
					flex-direction column;
					justify-content:center;
					align-items:center;
        }
      `}</style>
    </div>
  );
}

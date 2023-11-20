"use client"
import { useState, useEffect } from "react"
import AffirmationCard from "@/components/AffirmationCard"

export default function AffirmOld() {

  const [affirmations, setAffirmations] = useState()

  useEffect(() => {
    fetch("https://affirm-bc-api.web.app/affirmations")
      .then(res => res.json())
      .then(setAffirmations)
      .catch(alert)
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold dark:text-amber-200 text-amber-700">
        Old Affirmations
      </h1>
      <section className="container mx-auto sm:px-5 px-2 py-8 flex flex-wrap">
        {affirmations && affirmations.map(item => (
          <AffirmationCard key={item.id} item={item} />
        ))}
      </section>
    </>
  )
}

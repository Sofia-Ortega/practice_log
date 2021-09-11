import React from "react"
import SongTags from "./SongTags"

const songs = ["Kryptonite", "Hey Brother", "Let it go", "It's my life"]
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <SongTags songs={songs} />

      <div>

      </div>
    </div>
  )
}

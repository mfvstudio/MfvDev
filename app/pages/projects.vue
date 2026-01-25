<template>
  <div>
    <div class="text-left mt-80 text-5xl ml-32">
      General Asynchronous Multiplayer Game Server
    </div>
    <div class="flex w-full ml-12 mr-12 mt-32">
      <div class="divider divider-horizontal" />
      <div class="card bg-base-300 grid">
        <h3>Summary</h3>
        <br>
        <p>
          GameWizApi is a game server for turn-based games. It is general enough to work with many game formats (ex. TicTacToe, Chess, Darts).
          It can be used in game engine clients to create multiplayer game sessions. this api handle user account creation and user login by utilizing
          Firebase Authentication. After logging in, users are given an ID, which can be passed to api requests for authNZ. The bearer token has claims
          to verify if users can perform certain actions. Users can create Game Sessions and then share a 6 character UID to other users so they can join.
          There is no limit on the number of players that can join a session(Which I think I will implement one if issues arise). I wanted to test out the
          Google Cloud Platform, so I stuck with their services for this project. Also, I wanted to learn Golang (I heard great things!) so I used it to create
          the backend server. So far, this has been an exciting project. GCP is a great platform and may use it for other projects soon!
        </p>
        <br>
        <h3>Tech Stack</h3>
        <br>
        <ul class="list rounded-box">
          <li class="list-row">
            <div>
              -
            </div>
            <div>
              Go with openapi-go code generator to generate clients from OpenApi spec
            </div>
          </li>
          <li class="list-row">
            <div>
              -
            </div>
            <div>
              Google Cloud Platform. Firebase Authentication and Data Store. CloudRun. CloudBuild. ArtifactRegistry.
            </div>
          </li>
          <li class="list-row">
            <div>
              -
            </div>
            <div>
              Docker
            </div>
          </li>
        </ul>
        <div
          tabindex="0"
          class="collapse collapse-arrow bg-base-100 border-base-300 border mt-32"
        >
          <div class="collapse-title font-semibold">
            OpenApi Spec
          </div>
          <div class="collapse-content object-center">
            <iframe
              src="./../docs/GameWizApi.html"
              width="920"
              height="720"
              title="test"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>

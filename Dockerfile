FROM docker.io/clojure:temurin-25-tools-deps-trixie
#RUN apk add libgcc libstdc++ ripgrep
RUN apt update && apt install libgcc-s1 libstdc++6 ripgrep

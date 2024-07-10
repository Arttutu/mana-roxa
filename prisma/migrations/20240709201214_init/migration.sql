-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userautor" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "titulo2" TEXT NOT NULL,
    "titulo3" TEXT NOT NULL,
    "titulo4" TEXT NOT NULL,
    "titulo5" TEXT NOT NULL,
    "titulo6" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "texto2" TEXT NOT NULL,
    "texto3" TEXT NOT NULL,
    "texto4" TEXT NOT NULL,
    "texto5" TEXT NOT NULL,
    "texto6" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "tempoLeitura" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizacao" TIMESTAMP(3) NOT NULL,
    "imagem" TEXT NOT NULL,
    "imagem2" TEXT NOT NULL,
    "imagem3" TEXT NOT NULL,
    "imagem4" TEXT NOT NULL,
    "imagem5" TEXT NOT NULL,
    "imagem6" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userautor_key" ON "User"("userautor");

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

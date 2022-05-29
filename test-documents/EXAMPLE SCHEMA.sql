CREATE TABLE "recipe"(
    "recipe_id" INT NOT NULL,
    "name" INT NOT NULL,
    "description" INT NOT NULL,
    "created_by" INT NOT NULL
);
ALTER TABLE
    "recipe" ADD CONSTRAINT "recipe_recipe_id_primary" PRIMARY KEY("recipe_id");
CREATE TABLE "images"(
    "image_id" INT NOT NULL,
    "image_file" INT NOT NULL
);
ALTER TABLE
    "images" ADD CONSTRAINT "images_image_id_primary" PRIMARY KEY("image_id");
CREATE TABLE "ingredients"(
    "ingredient_id" INT NOT NULL,
    "name" INT NOT NULL
);
ALTER TABLE
    "ingredients" ADD CONSTRAINT "ingredients_ingredient_id_primary" PRIMARY KEY("ingredient_id");
CREATE TABLE "RecipeIngredient"(
    "recipe_id" INT NOT NULL,
    "ingredient_id" INT NOT NULL,
    "quantity" INT NOT NULL,
    "unit" NVARCHAR(255) NOT NULL,
    "image_id" INT NOT NULL
);
CREATE TABLE "users"(
    "id" INT NOT NULL,
    "username" NVARCHAR(255) NOT NULL,
    "email" NVARCHAR(255) NOT NULL,
    "password" NVARCHAR(255) NOT NULL
);
ALTER TABLE
    "users" ADD CONSTRAINT "users_id_primary" PRIMARY KEY("id");
ALTER TABLE
    "RecipeIngredient" ADD CONSTRAINT "recipeingredient_recipe_id_foreign" FOREIGN KEY("recipe_id") REFERENCES "recipe"("recipe_id");
ALTER TABLE
    "RecipeIngredient" ADD CONSTRAINT "recipeingredient_image_id_foreign" FOREIGN KEY("image_id") REFERENCES "images"("image_id");
ALTER TABLE
    "RecipeIngredient" ADD CONSTRAINT "recipeingredient_ingredient_id_foreign" FOREIGN KEY("ingredient_id") REFERENCES "ingredients"("ingredient_id");
ALTER TABLE
    "recipe" ADD CONSTRAINT "recipe_created_by_foreign" FOREIGN KEY("created_by") REFERENCES "users"("id");
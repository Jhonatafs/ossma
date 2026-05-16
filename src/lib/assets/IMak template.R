# IMak package template:
# Select the rules and run the whole sequence.

if (!require("IMak")) {
  install.packages("IMak")
}
library(IMak)

plot_fa(build_fa(

  # Number of isomorphs:
  isomorphs = 1,

  # Rule generation:
  main.rot = c(0, 0),  # Main shape rotation.
  mirror = 0,          # Main shape reflection.
  trap.rot = c(0, 0),  # Trapezium rotation.
  subtract = c(0, 0),  # Line segment subtraction.
  dot.mov = c(0, 0)),  # Dot movement.

  # Plot properties:
  mode = "A",
  form.int = "A",
  form.ext = "A",
  language = "E",
  language.dir = "E",
  directory = F # Choose directory between "" to store the item(s).

)
defmodule DayOne do
  def print_file do
    {:ok, content} = File.read("/Users/garyunyoung/Git/advent-of-code/2019/day-01/input.txt")
    
    content 
    |> IO.puts
  end
end

DayOne.print_file
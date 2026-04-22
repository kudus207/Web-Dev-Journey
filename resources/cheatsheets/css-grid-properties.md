✅ Grid Container Properties (parent)
1. display
        grid
        inline-grid

2. grid-template-columns

3. grid-template-rows

        Values:

        px, %, fr, auto
        repeat()
        minmax()

        Example:

        grid-template-columns: repeat(3, 1fr);

4. grid-template-areas
        "header header"
        "sidebar main"

5. grid-template (shorthand)

6. gap
        gap
        row-gap
        column-gap

7. justify-items (horizontal inside cells)
        start
        end
        center
        stretch

8. align-items (vertical inside cells)
        start
        end
        center
        stretch

9. place-items (shorthand)
        place-items: center;

10. justify-content (whole grid horizontal)
        start
        end
        center
        stretch
        space-between
        space-around
        space-evenly

11. align-content (whole grid vertical)
        same values as above

12. place-content (shorthand)

13. grid-auto-columns

14. grid-auto-rows
        auto
        sizes (px, fr, etc.)

15. grid-auto-flow
        row
        column
        dense

✅ Grid Items Properties (children)
1. grid-column
        grid-column: 1 / 3;

2. grid-row
        grid-row: 1 / 2;

3. grid-area
        by name OR shorthand:
        grid-area: 1 / 1 / 3 / 3;

4. justify-self
        start
        end
        center
        stretch

5. align-self
        start
        end
        center
        stretch

6. place-self
(shorthand)

grid-template-columns: minmax(2rem, 1fr) minmax(min-content, 94rem) minmax(2rem, 1fr);
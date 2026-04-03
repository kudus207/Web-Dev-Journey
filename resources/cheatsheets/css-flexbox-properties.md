✅ Flex Container Properties (parent)
1. display
            flex
            inline-flex

2. flex-direction
                    row (default)
                    row-reverse
                    column
                    column-reverse

3. flex-wrap
                nowrap (default)
                wrap
                wrap-reverse

4. flex-flow (shorthand)
                Combines flex-direction + flex-wrap
                Example:
                flex-flow: row wrap;

5. justify-content (main axis)
                flex-start
                flex-end
                center
                space-between
                space-around
                space-evenly

6. align-items (cross axis)
                stretch (default)
                flex-start
                flex-end
                center
                baseline

7. align-content (multi-line only)
                stretch
                flex-start
                flex-end
                center
                space-between
                space-around
                space-evenly

8. gap (modern spacing)
        gap
        row-gap
        column-gap


✅ Flex Items Properties (children)
1. order
        0 (default)
        any positive or negative number

2. flex-grow
        0 (default)
        any number

3. flex-shrink
        1 (default)
        any number

4. flex-basis
        auto
        0
        px, %, rem, etc.

5. flex (shorthand)
        flex: grow shrink basis;

        Examples:

        flex: 1
        flex: 1 1 auto
        flex: none

6. align-self
        auto
        flex-start
        flex-end
        center
        baseline
        stretch
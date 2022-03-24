function duGewinnst()
{
    alert ('Sieg!');
    Zustand = 2;
}
function duVerlierst()
{
    for(a=1;a<=Hoehe; ++a)
        for (b=1;b<=Breite; ++b)
            if (PositionM [a] [b]==1)
                documentgetElementById ('m'+a+'x'+b).className='Mine';
            Zustand = 0;
}


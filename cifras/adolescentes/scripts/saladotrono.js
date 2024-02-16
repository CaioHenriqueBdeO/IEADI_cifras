 $(document).ready(() => {

    $('.do').click(() => {
        $('.mod-grau1').html('C#')
        $('.mod-grau3').html('Fm')
        $('.mod-grau4').html('F#')
        $('.mod-grau5').html('G#')
        $('.mod-grau6').html('A#m')
        $('.pass-rel-tonica').html('G/C')
    })

    $('.dosus').click(() => {
        $('.mod-grau1').html('D')
        $('.mod-grau3').html('F#m')
        $('.mod-grau4').html('G')
        $('.mod-grau5').html('A')
        $('.mod-grau6').html('Bm')
        $('.pass-rel-tonica').html('G#/C#')
    })

    $('.re').click(() => {
        $('.mod-grau1').html('D#')
        $('.mod-grau3').html('Gm')
        $('.mod-grau4').html('A#')
        $('.mod-grau5').html('Bb')
        $('.mod-grau6').html('Cm')
        $('.pass-rel-tonica').html('A/D')
    })

    $('.mib').click(() => {
        $('.mod-grau1').html('E')
        $('.mod-grau3').html('G#m')
        $('.mod-grau4').html('A')
        $('.mod-grau5').html('B')
        $('.mod-grau6').html('C#m')
        $('.pass-rel-tonica').html('Bb/Eb')
    })

    $('.mi').click(() => {
        $('.mod-grau1').html('F')
        $('.mod-grau3').html('Am')
        $('.mod-grau4').html('Bb')
        $('.mod-grau5').html('C')
        $('.mod-grau6').html('Dm')
        $('.pass-rel-tonica').html('B/E')
    })

    $('.fa').click(() => {
        $('.mod-grau1').html('F#')
        $('.mod-grau3').html('A#m')
        $('.mod-grau4').html('B')
        $('.mod-grau5').html('C#')
        $('.mod-grau6').html('D#m')
        $('.pass-rel-tonica').html('C/F')
    })

    $('.fasus').click(() => {
        $('.mod-grau1').html('G')
        $('.mod-grau3').html('Bm')
        $('.mod-grau4').html('C')
        $('.mod-grau5').html('D')
        $('.mod-grau6').html('Em')
        $('.pass-rel-tonica').html('C#/F#')
    })

    $('.sol').click(() => {
        $('.mod-grau1').html('G#')
        $('.mod-grau3').html('Cm')
        $('.mod-grau4').html('Db')
        $('.mod-grau5').html('Eb')
        $('.mod-grau6').html('Fm')
        $('.pass-rel-tonica').html('D/G')
    })

    $('.solsus').click(() => {
        $('.mod-grau1').html('A')
        $('.mod-grau3').html('C#m')
        $('.mod-grau4').html('D')
        $('.mod-grau5').html('E')
        $('.mod-grau6').html('F#m')
        $('.pass-rel-tonica').html('Eb/G#')
    })

    $('.la').click(() => {
        $('.mod-grau1').html('Bb')
        $('.mod-grau3').html('Dm')
        $('.mod-grau4').html('Eb')
        $('.mod-grau5').html('F')
        $('.mod-grau6').html('Gm')
        $('.pass-rel-tonica').html('E/A')
    })

    $('.sib').click(() => {
        $('.mod-grau1').html('B')
        $('.mod-grau3').html('D#m')
        $('.mod-grau4').html('E')
        $('.mod-grau5').html('F#')
        $('.mod-grau6').html('Abm')
        $('.pass-rel-tonica').html('F/Bb')
    })

    $('.si').click(() => {
        $('.mod-grau1').html('C')
        $('.mod-grau3').html('Em')
        $('.mod-grau4').html('F')
        $('.mod-grau5').html('G')
        $('.mod-grau6').html('Am')
        $('.pass-rel-tonica').html('F#/B')
    })


})
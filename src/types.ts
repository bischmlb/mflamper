

// Farver i sortiment
// i nummereret rækkefølge
export enum TwSprayColor {
    MATTE_WHITE = '#FFFFFF',
    MTN_GREY_GREEN = '#B8BB86',
    MTN_BLUE_VIOLET_LIGHT = '#B985A3',
    MTN_PRIMARY_BLUE_DARK = '#26358A',
    MTN_BORDEAUX = '#610819',
    MTN_NEUTRAL_GREY = '#A5AAA8',
    MTN_PHTHALO_GREEN_BLUE = '#BBE9DE',
    MTN_MATTE_BLACK = '#28282B',
    MTN_GREY_GREEN_LIGHT = '#BEC39E',
    MTN_NEUTRAL_GREY_LIGHT = '#B4B8B6',
    MTN_GREY_GREEN_DARK = '#4A5D45',
    MTN_CADMIUN_YELLOW_LIGHT = '#FFE885',
    MTN_PHTHALO_BLUE_LIGHT = '#9185AE',
    MTN_TURQUOISE_GREEN = '#00D2B3',
    MTN_NEUTRAL_GREY_DEEP = '#676C73',
    MTN_AZO_ORANGE_DEEP = '#F05136',
    DUPLICOLOR_LIGHT_PINK_SATIN_MATTE = '#F8C8C1',
    BLANK = '#C0C0C0',
    MTN_COBALT_BLUE = '#28628E',
    MONTANA_PALE_ROSE = '#E1C3CC',
    MTN_BLUE_VIOLET_DARK = '#57374C',
    MTN_CADMIUM_YELLOW_MEDIUM = '#FFDD35',
    MTN_ULTRAMARINE_BLUE = '#385988',
    MTN_ELDORADO_YELLOW = '#ffb511'
}

export type ColorListing = {
    assortmentId: number;
    hex: TwSprayColor;
    name: string;
}

export type ColorListings = { [key in TwSprayColor]: ColorListing }


export enum Designer {
    ph = "Poul Henningsen",
    arne_jacobsen = "Arne Jacobsen",
}

export enum Variant {
    ph4 = 'PH 4',
    ph5 = 'PH 5',
    royal = 'AJ Royal'
}
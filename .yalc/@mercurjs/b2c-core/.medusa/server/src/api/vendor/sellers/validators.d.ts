import { z } from "zod";
export type VendorGetSellerParamsType = z.infer<typeof VendorGetSellerParams>;
export declare const VendorGetSellerParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
/**
 * @schema VendorCreateSeller
 * type: object
 * required:
 *   - name
 *   - handle
 *   - member
 * properties:
 *   name:
 *     type: string
 *     description: The name of the seller.
 *     minLength: 1
 *   description:
 *     type: string
 *     nullable: true
 *     description: A description of the seller.
 *   email:
 *     type: string
 *     description: Store contact email.
 *   phone:
 *     type: string
 *     description: Store contact phone.
 *   photo:
 *     type: string
 *     nullable: true
 *     description: URL to the seller's photo.
 *   address_line:
 *     type: string
 *     nullable: true
 *     description: Seller address line.
 *   postal_code:
 *     type: string
 *     nullable: true
 *     description: Seller postal code.
 *   city:
 *     type: string
 *     nullable: true
 *     description: Seller city.
 *   state:
 *     type: string
 *     nullable: true
 *     description: Seller state.
 *   country_code:
 *     type: string
 *     nullable: true
 *     description: Seller country code.
 *   tax_id:
 *     type: string
 *     nullable: true
 *     description: Seller tax id.
 *   member:
 *     type: object
 *     required:
 *       - name
 *       - email
 *     properties:
 *       name:
 *         type: string
 *         description: The name of the member.
 *       email:
 *         type: string
 *         description: The email of the member.
 *       bio:
 *         type: string
 *         nullable: true
 *         description: The member's biography.
 *       phone:
 *         type: string
 *         nullable: true
 *         description: The member's phone number.
 *       photo:
 *         type: string
 *         nullable: true
 *         description: URL to the member's photo.
 */
export type VendorCreateSellerType = z.infer<typeof VendorCreateSeller>;
export declare const VendorCreateSeller: z.ZodObject<{
    name: z.ZodEffects<z.ZodString, string, unknown>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    photo: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    address_line: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    city: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    state: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    postal_code: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    country_code: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    tax_id: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    member: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        bio: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        phone: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        photo: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        email: string;
        bio?: string | null | undefined;
        phone?: string | null | undefined;
        photo?: string | null | undefined;
    }, {
        name: string;
        email: string;
        bio?: string | null | undefined;
        phone?: string | null | undefined;
        photo?: string | null | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    name: string;
    member: {
        name: string;
        email: string;
        bio?: string | null | undefined;
        phone?: string | null | undefined;
        photo?: string | null | undefined;
    };
    description?: string | null | undefined;
    photo?: string | null | undefined;
    email?: string | null | undefined;
    phone?: string | null | undefined;
    address_line?: string | null | undefined;
    city?: string | null | undefined;
    state?: string | null | undefined;
    postal_code?: string | null | undefined;
    country_code?: string | null | undefined;
    tax_id?: string | null | undefined;
}, {
    member: {
        name: string;
        email: string;
        bio?: string | null | undefined;
        phone?: string | null | undefined;
        photo?: string | null | undefined;
    };
    name?: unknown;
    description?: string | null | undefined;
    photo?: string | null | undefined;
    email?: string | null | undefined;
    phone?: string | null | undefined;
    address_line?: string | null | undefined;
    city?: string | null | undefined;
    state?: string | null | undefined;
    postal_code?: string | null | undefined;
    country_code?: string | null | undefined;
    tax_id?: string | null | undefined;
}>;
/**
 * @schema VendorUpdateSeller
 * title: "Update Seller"
 * description: "A schema for the update seller request body."
 * x-resourceId: VendorUpdateSeller
 * type: object
 * properties:
 *   name:
 *     type: string
 *     description: The name of the seller.
 *     minLength: 4
 *   description:
 *     type: string
 *     nullable: true
 *     description: A description of the seller.
 *   photo:
 *     type: string
 *     nullable: true
 *     description: URL to the seller's photo.
 *   email:
 *     type: string
 *     description: Store contact email.
 *   phone:
 *     type: string
 *     description: Store contact phone.
 *   address_line:
 *     type: string
 *     nullable: true
 *     description: Seller address line.
 *   postal_code:
 *     type: string
 *     nullable: true
 *     description: Seller postal code.
 *   city:
 *     type: string
 *     nullable: true
 *     description: Seller city.
 *   state:
 *     type: string
 *     nullable: true
 *     description: Seller state.
 *   country_code:
 *     type: string
 *     nullable: true
 *     description: Seller country code.
 *   tax_id:
 *     type: string
 *     nullable: true
 *     description: Seller tax id.
 */
export type VendorUpdateSellerType = z.infer<typeof VendorUpdateSeller>;
export declare const VendorUpdateSeller: z.ZodObject<{
    name: z.ZodOptional<z.ZodEffects<z.ZodString, string, unknown>>;
    description: z.ZodOptional<z.ZodString>;
    photo: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    address_line: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    postal_code: z.ZodOptional<z.ZodString>;
    country_code: z.ZodOptional<z.ZodString>;
    tax_id: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | undefined;
    photo?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    address_line?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    postal_code?: string | undefined;
    country_code?: string | undefined;
    tax_id?: string | undefined;
}, {
    name?: unknown;
    description?: string | undefined;
    photo?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    address_line?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    postal_code?: string | undefined;
    country_code?: string | undefined;
    tax_id?: string | undefined;
}>;
export type VendorGetOnboardingParamsType = z.infer<typeof VendorGetOnboardingParams>;
export declare const VendorGetOnboardingParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
